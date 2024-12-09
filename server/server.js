const dotenv = require("dotenv").config();

const express = require('express');
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();

const mongoose = require('mongoose');
const Recipe = require("./database_schema/recipe.model");
const User = require("./database_schema/user.model");
const { Db } = require("mongodb");

// Environment variables
const frontendURL = process.env.frontendURL;
const mongoDBURL = process.env.mongoDBURL;
const port = process.env.port;
const apiURL = process.env.apiURL;

app.use( express.json() );
app.use( cors({
    origin: frontendURL,
    credentials: true
  }) 
);


// Listen to requests from the port
app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}/`);
});

// Connect to DB
mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => { console.log("Connection Successfull") })
  .catch((err) => { console.log("Received an Error") })

// Debug: get all the users on the database
app.get(apiURL + "/login", async (req, res) => {
  try {
    const find_user = await User.find({});
    res.status(200).json(find_user);
  } catch {
    res.status(500).send();
  }
});

// Log in a user
app.post(apiURL + "/login", async (req, res) => {
  // Find the user by the email
  const found_user = await User.findOne({"email": req.body.email});

  // Check if it exists
  if (found_user == null)
    return res.status(400).send({message: "Email incorrect."});

  // Check if the password is correct, log in if it is
  try {
    if (await bcrypt.compare(req.body.password, found_user.password)) {
      // Modify the sent data to the frontend
      delete found_user.password;
      delete found_user._id;

      res.cookie('user', JSON.stringify(found_user), {
        httpOnly: false,
        secure: false,   // Ensures the cookie is sent over HTTPS
        maxAge: 86_400_000 // Cookie lifespan in milliseconds (1 day)
      }).status(200).send();
    } else {
      res.status(400).send({message: "Password incorrect."});
    }
  } catch {
    res.status(500).send({message: "Server doesn't know how to parse the request."});
  }
});

// Debug: Get all the users from the database
app.get(apiURL + "/signin", async (req, res) => {
  try {
    const find_user = await User.find({});
    res.status(200).json(find_user);
  } catch {
    res.status(500).send();
  }
});

// Add a user into the database
app.post(apiURL + "/signin", async (req, res) => {
  try {

    // Check if the email has been used already
    const found_user = await User.findOne({"email": req.body.email});
    if (found_user != null) {
      res.status(409).json({message: "Email already in use."});
      return;
    }

    // Create a hashed password for the new user
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const new_user = await User.create(req.body); 
    
    // Modify the sent data to the frontend
    delete new_user.password;

    // Send a loggin cookie
    res.cookie('user', JSON.stringify(new_user), {
      httpOnly: false,
      secure: false,   // Ensures the cookie is sent over HTTPS
      maxAge: 86_400_000 // Cookie lifespan in milliseconds (1 day)
    }).status(201).send({message: 'Sign In successful!'});

    return;
  } catch(error) {
    console.log(error);
    res.status(500).json({message: "SERVER_ERROR"});
  }
});

// Add a recipe to the database
app.post(apiURL + "/addrecipe", async (req, res) => {
  try {
    // Check if the recipe has already been added
    const found_recipe = await Recipe.findOne({"name": req.body.recipe_name});
    if (found_recipe != null) {
      res.status(409).json({message: "Recipe has already been added."});
      return;
    }

    // Create the new recipe
    await Recipe.create(req.body);
    
    // Send a success message
    res.status(201).send({message: 'Recipe has been added succesfully!'});
    return;
  } catch(error) {
    console.log(error);
    res.status(500).json({message: "SERVER_ERROR"});
  }
});

// Request the top rated recipes
app.get(apiURL + "/toprecipe", async (req, res) => {
  try {
    const top_recipes = await Recipe.find({}).sort({ rating: -1}).limit(3);

    // Map the results to include only the required fields
    const filtered_results = top_recipes.map((recipe) => ({
      creator_name: recipe.creator_name,
      recipe_name: recipe.recipe_name,
      description: recipe.description,
      people_rated: recipe.people_rated,
      rating: parseFloat(recipe.rating), // Convert Decimal128 to float
      image: recipe.image,
    }));

    res.status(200).json(filtered_results);
  } catch (error) {
    console.log(error)
    res.status(500).send();
  }
});


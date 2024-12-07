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
        maxAge: 600_00 // Cookie lifespan in milliseconds (1 minute)
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

// Introduce a user into the database
app.post(apiURL + "/signin", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(req.body.password, salt);
    
    const new_user = await User.create(req.body); 

    res.status(201).json(new_user);
  } catch {
    res.status(500).send();
  }
});

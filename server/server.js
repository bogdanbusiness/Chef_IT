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
const mongoDBURL = process.env.mongoDBURL;
const port = process.env.port;
const apiURL = process.env.apiURL;

app.use( express.json() );
app.use( cors() );


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

const loggedInSuccess = [{
  logIn: 1
}];
  
const loggedInFail = [{
  logIn: 0
}];
  
  // {
  //   uid: 1,
  //   email: "test@gmail.com",
  //   password: "ceva",
  //   full_name: "Cineva",
  //   telephone: "07",
  //   timestamp: 1
  // }

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
    return res.status(400).send('No user found');

  // Check if the password is correct, log in if it is
  try {
    if (await bcrypt.compare(req.body.password, found_user.password)) {
      res.status(200).json(loggedInSuccess);
    } else {
      res.status(200).json(loggedInFail);
    }
  } catch {
    res.status(500).send();
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
    // new_user.id = _id;

    res.status(201).json(new_user);
  } catch {
    res.status(500).send();
  }
});

// How to implement cookies
/* res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true }) */
/*
    domain	The cookie domain name
    expires	Set the cookie expiration date. If missing, or 0, the cookie is a session cookie
    httpOnly	Set the cookie to be accessible only by the web server. See HttpOnly
    maxAge	Set the expiry time relative to the current time, expressed in milliseconds
    path	The cookie path. Defaults to '/'
    secure	Marks the cookie HTTPS only
    signed	Set the cookie to be signed
    sameSite	Value of SameSite
*/

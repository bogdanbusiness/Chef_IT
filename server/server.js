const mongoose = require('mongoose');
const express = require('express');
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

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


// What to return on a GET request
app.get(apiURL, (req, res) => {
  res.status(200);
  res.send({"string": "Hello from express!"});
});

// What to do with a POST request
app.post(apiURL + ":id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "Logo not found."});
  }

  res.send({
    struct: `struct with id: ${id} and logo: ${logo}` ,
  });

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

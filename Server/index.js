// IMPORTS/REQUIRES
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config()

// VARIABLES
const app = express();
const createInitialSession = require( `${__dirname}/middlewares/session.js` );

// TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

// ENDPOINTS


// LISTEN
const port = 3210;
app.listen(port, () => {console.log(`The black eyed children are knocking on port ${port}`)});
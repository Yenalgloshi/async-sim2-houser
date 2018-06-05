// IMPORTS/REQUIRES
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config()

// VARIABLES
const app = express();
const ctrl = require('./controller');
// const createInitialSession = require( `${__dirname}/middlewares/session.js` );

// TOP LEVEL MIDDLEWARE
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
  // dbInstance.seedFile()
  // .then(res => console.log('Seed successful'))
  // .catch(err => console.log('Seed not successful', err))

  app.set('db', dbInstance);

}).catch(err => console.log(err))

// ENDPOINTS
// app.get('/api/auth/users', ctrl.getUsers)
app.post('/api/auth/login', ctrl.userLogin)
app.post('/api/auth/register', ctrl.userReg)
app.post('/api/auth/logout', ctrl.userLogout)
app.post('/api/properties', ctrl.createProperty)
app.get('/api/properties', ctrl.getProperties)
app.delete('/api/properties/:propId', ctrl.delProperty)

// LISTEN
const port = 3210;
app.listen(port, () => {console.log(`The black eyed children are knocking on port ${port}`)});
'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));

const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const https = require('https');

const { router: usersRouter } = require('./users');
const { router: pollRouter } = require('./polls');
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');

mongoose.Promise = global.Promise;

const { PORT, DATABASE_URL } = require('./config');
const { Poll } = require('./poll-model');

//Body parsing
app.use(bodyParser.json());

// Logging
app.use(morgan('common'));


// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api/users/', usersRouter);
app.use('/api/auth/', authRouter);
app.use('/api/poll', pollRouter);

const jwtAuth = passport.authenticate('jwt', { session: false });

const api_key = 'wnY4Trg2G2BzWvRBHlMLl-_1KEt2Z7Hd-2D4untSR_KJ6fJYwhAlT_Y-InkvpNrfq21EKtBsJD_G2aC0DUnwQEBRO43pX4zbR39mTNe8-NFwZp_GOEF6tuDS0fLLWnYx';
const yelpBaseUrl = 'api.yelp.com/v3/businesses';
const path = '';
const zipcode = 70130;
const restaurantCuisine = 'thai';

const yelpSearchOptions = {
  hostname: yelpBaseUrl,
  path: ` /search?terms=restaurants&location=${zipcode}&radius7050&limit=3&categories=${restaurantCuisine}`,
  headers: {
    Authorization: `Bearer ${api_key}`
  }
};

//yelp request
app.get('/request', jwtAuth, (req) => {
  let restaurantCuisine = restaurantCuisine;
  let zipcode = zipcode;
  makeYelpRequest(restaurantCuisine, zipcode); 
});

function makeYelpRequest(restaurantCuisine, zipcode) {
  https.get(yelpSearchOptions, (res) => {
    let string = '';
    res.on('data', (data) => {string += data;});
    res.on('end', () => {
      let json = JSON.parse(string);
      handleJson(json);
    });
    const reportError = function(err) { console.error(err) ;}; 
    res.on('error', reportError);
  });
}



// A protected endpoint which needs a valid JWT to access it
app.get('/api/protected', jwtAuth, (req, res) => {
  return res.json({
    data: 'rosebud'
  });
});

app.use('*', (req, res) => {
  return res.status(404).json({ message: 'Not Found' });
});

// Referenced by both runServer and closeServer. closeServer
// assumes runServer has run and set `server` to a server object
let server;

function runServer(DATABASE_URL, PORT=8080) {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(PORT, () => {
          console.log(`Your app is listening on port ${PORT}`);
          resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };

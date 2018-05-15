'use strict';
const https = require('https');
const express = require('express');
const router = require('router');
const Poll = require('../poll-model');
// consider using async! in particular async.eachSeries


router.get('/pollcreate', (req, res) => {
  const query = req.query || {};

})

// router.get('/createpoll', function(req, res, next) {
//   if (!req.user) return res.json({err: 'not logged in'});
//   return next();
// }, function(req, res, next) {
//   const poll = new Poll({

//   });
//   return res.json(poll);
// });

// router.get('/:id', function(req, res, next) {
//     Poll.findById(id, function(err, poll) {
//         if (err) //lskdfajks

//         // /api/polls/32104918209381209

//     })
//     // req.params.id
// });

// router.post('/:id', function(req, res, next) {
//     Poll.findOneAndUpdate({_id: id}, {update_parameters}, function(err, poll) {
//         if (err) //asd

//     });
//     // req.params.id
//     // req.body
// });

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

function makeYelpRequest(restaurantCuisine, zipcode) {
  https.get(yelpSearchOptions, (res) => {
    let string = '';
    res.on('data', (data) => {string += data;});
    res.on('end', () => {
      let json = JSON.parse(string);
      handleJson(json);
    });
    res.on('error', (err) => {console.error(err);
    });
  })
    .on('error', (err) => {console.error(err);
    });
}

function createRestaurant(yelpObject, done) {

}

function createPoll(localIds) {
  // localIds are the MongoDB ids (object._id)
}

function handleJson(json) {
  // insert three restaurants into database
  let localIds = [];
  for (biz of json.businesses) {
    createRestaurant(biz);
  }
} 

module.exports = (makeYelpRequest, router);
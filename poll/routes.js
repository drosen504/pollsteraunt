'use strict';
const https = require('https');
const express = require('express');
const router = require('router');
const Poll = require('../poll-model');
// consider using async! in particular async.eachSeries


router.get('/pollcreate', (req, res) => {
  const query = req.query || {};

});

router.get('/createpoll', function(req, res, next) {
  if (!req.user) return res.json({err: 'not logged in'});
  return next();
}, function(req, res, next) {
  const poll = new Poll({

  });
  return res.json(poll);
});

router.get('/:id', function(req, res, next) {
    Poll.findById(id, function(err, poll) {
        if (err) //lskdfajks

        // /api/polls/32104918209381209

    })
    req.params.id
});

router.post('/:id', function(req, res, next) {
    Poll.findOneAndUpdate({_id: id}, {update_parameters}, function(err, poll) {
        if (err) //asd

    });
    req.params.id
    req.body
});


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
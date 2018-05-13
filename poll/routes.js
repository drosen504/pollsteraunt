'use strict';
const https = require('https');
const express = require('express');
const router = require('router');
const Poll = require('path/to/poll');
// consider using async

router.get('/createpoll', function(req, res, next) {
  if (!req.user) return res.json({err: 'not logged in'});
  return next();
}, function(req, res, next) {
    var poll = new Poll({

    });
    return res.json(poll);
});

router.get('/:id', function(req, res, next) {
    Poll.findById(id, function(err, poll) {
        if (err) //lskdfajks

        // /api/polls/32104918209381209

    })
    // req.params.id
});

router.post('/:id', function(req, res, next) {
    Poll.findOneAndUpdate({_id: id}, {update_parameters}, function(err, poll) {
        if (err) //asd

    });
    // req.params.id
    // req.body
});

const api_key = 'wnY4Trg2G2BzWvRBHlMLl-_1KEt2Z7Hd-2D4untSR_KJ6fJYwhAlT_Y-InkvpNrfq21EKtBsJD_G2aC0DUnwQEBRO43pX4zbR39mTNe8-NFwZp_GOEF6tuDS0fLLWnYx';
const base_uri = 'api.yelp.com';
const path = '/v3/transactions/delivery/search?latitude=37.786882&longitude=-122.399972';

const options = {
  hostname: base_uri,
  path: path,
  headers: {
    Authorization: `Bearer ${api_key}`
  }
};

function makeYelpRequest(cuisine, zip) {
  https.get(options, (res) => {
    var str = '';
    res.on('data', (d) => {str += d;});
    res.on('end', () => {
      var json = JSON.parse(str);
      handleJson(json);
    });
    res.on('error', (e) => {console.error(e);});
  }).on('error', (e) => {console.error(e);});
}

function createRestaurant(yelpObject) {

}

function createPoll(localIds) {
    // localIds are the MongoDB ids (object._id)
};

function handleJson(json) {
    // insert three restaurants into database
    var localIds = [];
    for (biz of json.businesses) {
        createRestaurant(biz);
    }
}
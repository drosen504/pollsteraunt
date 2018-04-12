'use strict';
/* global $ config */

const yelpBaseUrl = 'https://api.yelp.com/v3/businesses';
const apiKey = 'wnY4Trg2G2BzWvRBHlMLl-_1KEt2Z7Hd-2D4untSR_KJ6fJYwhAlT_Y-InkvpNrfq21EKtBsJD_G2aC0DUnwQEBRO43pX4zbR39mTNe8-NFwZp_GOEF6tuDS0fLLWnYx';

const api = function() {
  return {
    //randomInteger function will be for randomized pulling of results from Yelp API GET request.
    randomInteger: function(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    getBusinessDataFromYelpApi: function(searchTerm, callback, apiKey) {
      const query = {

      };
    },
  };
}();
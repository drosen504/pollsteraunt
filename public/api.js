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

    getBusinessDataFromYelpApi: function (endpoint, query = {}) {
      console.log('Yelp API function triggered');
      const url = new URL(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${endpoint}`);
      const headers = new Headers();
      headers.set('Authorization', `Bearer ${apiKey}`);
      const requestObject = {
        headers
      };
       
      Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
      console.log(url);
      console.log(requestObject);
      return fetch(url, requestObject).then(function (response) {
        if (!response.ok) {
          return Promise.reject(response.statusText);
        }
        return response.json();
      });
    },
    yelpBusinessSearch: function(location, business){
      console.log('Yelp search initiated');
      return api.getBusinessDataFromYelpApi('search', {
        term: 'restaurants',
        location: location,
        categories: business,
        radius: '8050',
        limit: 3,
      })
        .then(data => { 
          console.log('Data = ', data.businesses) ;
          const restaurantData = data.businesses;
          console.log(restaurantData);
        })
        .catch(error => console.log(error));
    },
  };
}();
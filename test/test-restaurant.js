'use strict';

const chai = require('chai');
const mongoose = require('mongoose');

const expect = chai.expect;

const {Restaurant} = require('../restaurant-model');
const {TEST_DATABASE_URL} = require('../config');

describe('Restaurant', function() {
  it('is not valid unless it contains a cuisine', function() {
    const restaurant = new Restaurant({
      cuisine: null, 
      name: 'Anything',
      url: 'http://www.whatever.com',
      yelp_id: '324234jkh432432'    
    });
    restaurant.save(function(error) {
      expect(error.errors['cuisine']).to.equal('Path `cuisine` is required.');
    }); 
  });
});


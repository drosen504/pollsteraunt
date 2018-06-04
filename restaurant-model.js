'use strict';

const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  cuisine: {type: String, required: true},
  name: {type: String, required: true},
  url: {type: String, required: true},
  score: {required: false, default: 0},
  yelp_id: {
    type: String,
    required: true,
    unique: true
  }
});

restaurantSchema.methods.serialize= function() {
  return {
    name: this.name,
    url: this.url,
    score: this.score         
  };
};

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {Restaurant, restaurantSchema};

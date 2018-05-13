'use strict';

const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
  cuisine: {type: String, required: true},
  restaurant: {
    name: String,
    url: String,
    score: Number
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

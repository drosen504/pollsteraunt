'use strict';

const mongoose = require('mongoose');
const { Restaurant, restaurantSchema } = require('./restaurant-model');

const pollSchema = mongoose.Schema({  
  cuisine: {type: String, required: true},
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant'
  }]
});


pollSchema.methods.serialize= function() {
  return {
    id: this._id,
    cuisine: this.cuisine,
    options: this.options         
  };
};

const Poll = mongoose.model('Poll', pollSchema);

module.exports = {Poll};
'use strict';

const mongoose = require('mongoose');

const pollSchema = mongoose.Schema({
  type: {type: String, required: true},
  options: [{
    option1: {
      name: String,
      url: String,
      score: Number, 
    },
    option2: {
      name: String,
      url: String,
      score: Number, 
    },
    option3: {
      name: String,
      url: String,
      score: Number, 
    },
  }]
});

pollSchema.methods.serialize= function() {
  return {
    id: this._id,
		type: this.type,
		options:          
  };
};
'use strict';

const mongoose = require('mongoose');
const { Restaurant } = require('./restaurant-model');

const pollSchema = mongoose.Schema({
  type: {type: String, required: true},
  options: [{
    option1: { Restaurant },
    //   name: String,
    //   url: String,
    //   score: Number, 
    // },
    option2: { Restaurant },
    //   name: String,
    //   url: String,
    //   score: Number, 
    // },
    option3: { Restaurant },
    //   name: String,
    //   url: String,
    //   score: Number, 
    // },
  }]
});



pollSchema.methods.serialize= function() {
  return {
    id: this._id,
    type: this.type,
    options: this.options         
  };
};

const Poll = mongoose.model('Poll', pollSchema);

module.exports = {Poll};
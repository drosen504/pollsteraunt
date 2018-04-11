'use strict';
/* global $ */
/* global generator */

const handler = function() {
  return {
    handleCreatePollClick: function() {
      
      generator.displayPollSearchData(RESTAURANTS);
   
    }

  };
}();
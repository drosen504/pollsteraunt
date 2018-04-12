'use strict';
/* global generator api $ */

const handler = function() {
  return {
    //grabs the location and search query, stores them, and passes them along to API call function
    handleCreatePollClick: function() {
      event.preventDefault();
      const enteredLocation = $('#js-zip-input').val();
      const enteredBusiness = $('#js-business-type').val();
      console.log(`Zip is ${enteredLocation} and Business is ${enteredBusiness}`);
      api.yelpBusinessSearch(enteredLocation, enteredBusiness);
   
    }

  };
}();
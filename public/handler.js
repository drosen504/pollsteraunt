'use strict';
/* global generator api $ */

const handler = function() {
  return {
    //grabs the location and search query, stores them, and passes them along to API call function
    handleCreatePollClick: function() {
      event.preventDefault();
      const enteredLocation = $('#js-zip-input').val();
      const enteredRestaurantType = $('#js-business-type').val();
      api.yelpBusinessSearch(enteredLocation, enteredRestaurantType);
    },

    //need to write this function to grab poll ID from Url, which is how users navigate to poll in the first place. This pollId will be passed to api.pollsterauntPollSearch in order to make API call to Pollsteraunt database. This function will be triggered automatically after the DOM loads.
    getPollIdFromUrl: function() {
      event.preventDefault();
      api.pollsterauntPollSearch(0);
    },

  };
}();
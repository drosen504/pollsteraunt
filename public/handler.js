'use strict';
/* global generator api $ */

const STORE = {};
STORE.currentView = 'login';

switch (STORE.currentView) {
  case 'login':
    ids_to_show.concat(['.js-login-form login-form', '.js-signup-form']);
    ids_to_hide.concat(['.js-generated-poll-results', '.js-existing-poll', '.js-poll-creation']);  
  case 'dashboard':
    ids_to_show.concat(['.js-poll-creation']);
    ids_to_hide.concat(['.js-generated-poll-results', '.js-existing-poll', '.js-login-form login-form', '.js-signup-form']);
    break;
  case 'poll-create':
    ids_to_show.concat(['.js-generated-poll-results']);
    ids_to_hide.concat(['.js-poll-creation', '.js-existing-poll', '.js-login-form login-form', '.js-signup-form']);
    break;
  

};
 
  showAll(ids_to_show);
  hideAll(ids_to_hide);

  function showAll(array) {
    array.forEach((id) => {
      id.show();
    });

    function hideAll(array) {
    array.forEach((id) => {
      id.hide();
    });  
}



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
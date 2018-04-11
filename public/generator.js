'use strict';
/* global $ */
/* global RESTAURANTS */

const generator = function() {
  return { 
    renderAdminPollQuestion: function(result) {
      $('.js-poll-creation').html(`
      <form>
        <fieldset>
          <input type="radio" name="option1" value=0>${RESTAURANTS.businesses[0].name} <br>
          <input type="radio" name="option2" value=1>${RESTAURANTS.businesses[1].name} <br>
          <input type="radio" name="option3" value=2>${RESTAURANTS.businesses[2].name} <br>
          <button name="accept-poll">Accept Poll</button><button name="refresh-poll">Refresh Poll</button>
      </form>`);
    },

  };
}();
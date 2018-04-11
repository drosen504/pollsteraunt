'use strict';
/* global $ */
/* global RESTAURANTS */

const generator = function() {
  return { 
    renderAdminPollQuestion: function(result) {
      return `
      <form>
        <fieldset>
          <input type="radio" name="option1" value=0>${result.name} <br>
        </fieldset>            
      </form>`;
    },

    renderAcceptRefreshPollButtons: function() {
      $('.js-poll-creation').append('<button name="accept-poll">Accept Poll</button><button name="refresh-poll">Refresh Poll</button>');
    },

    displayPollSearchData: function(data) {
      console.log(data);
      const results = data.businesses.map((business) => generator.renderAdminPollQuestion(business));
      $('.js-poll-creation').html(results);
      generator.renderAcceptRefreshPollButtons();
    }
  };
}();


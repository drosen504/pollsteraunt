'use strict';
/* global $ RESTAURANTS*/


const generator = function() {
  return { 
    hideAll: function() {
      console.log('hiding everything');
      $('.js-login-form').hide();
      $('.js-signup-form').hide();
    },

    renderAdminPollQuestion: function(result) {
      console.log('result getting passed into render function is', result);
      $('.js-poll-creation').html(`
      <form>
        <fieldset>
          <input type="radio" name='business' value=0 required> <a role="link" href="${result[0].url}" target= '_blank'> ${result[0].name} </a></input> <br>
          <input type="radio" name='business' value=1> <a role="link" href="${result[1].url}" target= '_blank'> ${result[1].name} </a> </input> <br>
          <input type="radio" name='business' value=2> <a role="link" href="${result[2].url}" target= '_blank'> ${result[2].name} </a> <br>
        </fieldset>
      </form>`);
      generator.renderAcceptRefreshPollButtons();
    },

    renderAcceptRefreshPollButtons: function() {
      $('.js-poll-creation').append('<button name="accept-poll">Accept Poll</button><button name="refresh-poll">Refresh Poll</button>');
    },

    renderUserPoll: function(pollData) {
      console.log('rendering poll for user');
      $('.js-polling-form').html(`
        <fieldset>
          <input type="radio" name='business' value=0 required> <a role="link" href="${pollData[0].restaurantOptions[0].yelpUrl}" target= '_blank'> ${pollData[0].restaurantOptions[0].name} - Current votes: ${pollData[0].restaurantOptions[0].voteScore} </a></input> <br>
          <input type="radio" name='business' value=1> <a role="link" href="${pollData[0].restaurantOptions[1].yelpUrl}" target= '_blank'> ${pollData[0].restaurantOptions[1].name} - Current votes: ${pollData[0].restaurantOptions[1].voteScore} </a> </input> <br>
          <input type="radio" name='business' value=2> <a role="link" href="${pollData[0].restaurantOptions[2].yelpUrl}" target= '_blank'> ${pollData[0].restaurantOptions[2].name} - Current votes: ${pollData[0].restaurantOptions[2].voteScore} </a> <br>
        </fieldset>
      `);

    },
    
    swapToLoginView: function() {
      console.log('swapToLoginView function triggered');
      generator.hideAll();
      $('.js-signup-form').show();

    },
    

  };
}();




// displayPollSearchData: function(data) {
//   const results = data.map((business) => generator.renderAdminPollQuestion(business));
//   console.log('results for html generation are', results);
//   $('.js-poll-creation').html(results);
//   generator.renderAcceptRefreshPollButtons();
// }


'use strict';
/* global $ RESTAURANTS*/


const generator = function() {
  return { 
    renderAdminPollQuestion: function(result) {
      console.log('result getting passed into render function is', result);
      $('.js-poll-creation').html(`
      <form>
        <fieldset>
          <input type="radio" name='business' value=0 required> ${result[0].name} </input> <br>
          <input type="radio" name='business' value=1> ${result[1].name} </input> <br>
          <input type="radio" name='business' value=2> ${result[2].name} </input> <br>
        </fieldset>
      </form>`);
      generator.renderAcceptRefreshPollButtons();
    },

    renderAcceptRefreshPollButtons: function() {
      $('.js-poll-creation').append('<button name="accept-poll">Accept Poll</button><button name="refresh-poll">Refresh Poll</button>');
    },
  
    
    // displayPollSearchData: function(data) {
    //   const results = data.map((business) => generator.renderAdminPollQuestion(business));
    //   console.log('results for html generation are', results);
    //   $('.js-poll-creation').html(results);
    //   generator.renderAcceptRefreshPollButtons();
    // }
  };
}();


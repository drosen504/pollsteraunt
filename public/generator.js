'use strict';
/* global $ */
/* global RESTAURANTS */

const generator = function() {
  return { 
    renderAdminPollQuestion: function(result) {
      $('#js-poll-creation').html(`
      <form>
        <fieldset>
          <input type="radio" name="option1" value=0>${RESTAURANTS.businesses[0].name} <br>
          <input type="radio" name="option2" value=1>${RESTAURANTS.businesses[1].name} <br>
          <input type="radio" name="option3" value=2>${RESTAURANTS.businesses[2].name} <br>
          <button name="accept-poll">Accept Poll</button><button name="refresh-poll">Refresh Poll</button>
      </form>`);
    },
                  
    renderMoreButton: function(token) {
      $('#more-results').html(`
            <button id='more-vids' type='button' data-token='${token}'>More results</button>
            `);
    },
  
    displayYTSearchData: function(data) {
      const results = data.items.map((item) => generator.renderResult(item)); /*why won't this.renderResult work?*/
      let nextPageToken = data.nextPageToken;
      $('.js-search-results').html(results);
      generator.renderMoreButton(nextPageToken); /*why won't this.renderMoreButton work?*/
          
    } 
  };
}();
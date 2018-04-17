'use strict';
/* global $ handler generator*/

let authToken;

//saves entered values for username/password on signup. trigger POST API call function thereafter
const handleSignupClick = function(event) {
  event.preventDefault();
  const enteredUsername = $('.js-username').val();
  const enteredPassword = $('.js-password').val();
  console.log(`Username entered is ${enteredUsername} and password is ${enteredPassword}`);
  $('.js-username').val('');
  $('.js-password').val('');
  createAccountApiCall(enteredUsername, enteredPassword);
}; 

//POST API call with entered username and password. automatically triggers login POST function to log user in
const createAccountApiCall = function(username, password) {
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: JSON.stringify({
      'username': username,
      'password': password
    }),
    contentType: 'application/json',
    success: result => { console.log(result); },
    error: error => { console.log(`Error: ${error.responseJSON.message}`); }  
  })
    .done(function(json){
      console.log(json);
      loginAccountApiCall(username, password);
    });
};

//POST API call that checks username that routes valid users to dashboard page
const loginAccountApiCall = function(username, password){
  $.ajax({
    type: 'POST',
    url: '/api/auth/login',
    data: JSON.stringify({
      'username': username,
      'password': password
    }),
    contentType: 'application/json',
    success: result => {
      localStorage.setItem('Bearer', result.authToken);
      authToken = localStorage.getItem('Bearer');
      window.location = 'dashboard.html'; 
    },  
    error: error => { console.log(`Error: ${error.responseJSON.message}`); }  
  });
};

// const refreshAuthApiCall = function(authToken) {
//   $.ajax({
//     type: 'POST',
//     url: '/api/auth/login',
//     data: JSON.stringify({
//       'username': username,
//       'password': password
//     }),
//     contentType: 'application/json',
//     success: result => {
//       localStorage.setItem('Bearer', result.authToken);
//       authToken = localStorage.getItem('Bearer');
//       //enter new location upon successful login---- window.location.replace(); 
//     },  
//     error: error => { console.log(`Error: ${error.responseJSON.message}`); }  
//   });
// };



$(() => {
  generator.hideAll();
  $('.js-signup-form').show();
  $('#js-link-to-login').on('click', generator.swapToLoginView);
  $('.signup-form').on('submit', handleSignupClick);
  $('#js-create-a-poll').on('click', handler.handleCreatePollClick);
  $('.js-polling-form').on('click', handler.getPollIdFromUrl);
  
  
});
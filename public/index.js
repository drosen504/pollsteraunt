'use strict';
/* global $ */


const handleSignupClick = function(event) {
  event.preventDefault();
  const enteredUsername = $('.js-username').val();
  const enteredPassword = $('.js-password').val();
  console.log(`Username entered is ${enteredUsername} and password is ${enteredPassword}`);
  $('.js-username').val('');
  $('.js-password').val('');
  
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: JSON.stringify({
      'username': enteredUsername,
      'password': enteredPassword
    }),
    contentType: 'application/json',
    success: function(result){
      console.log(result);
    }
  });
}; 

const createAccountApiCall = function() {
  //POST request to create account;
};

$(() => {
  $('.signup-form').on('submit', handleSignupClick);
});
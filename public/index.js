'use strict';
/* global $ */


const handleSignupClick = function(event) {
  event.preventDefault();
  const enteredUsername = $('.js-username').val();
  const enteredPassword = $('.js-password').val();
  console.log(`Username entered is ${enteredUsername} and password is ${enteredPassword}`);
  $('.js-username').val('');
  $('.js-password').val('');
  
  // let accountFormInfo = {};
  // accountFormInfo['username'] = `${enteredUsername}`;
  // accountFormInfo['password'] = `${enteredPassword}`;
  
  let formData = new FormData();
  formData.append('username', enteredUsername);
  formData.append('password', enteredPassword);
  console.log(`accountFormInfo is now ${formData}`);

  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: FormData,
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
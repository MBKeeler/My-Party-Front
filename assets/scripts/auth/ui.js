'use strict'
const store = require('../store')

// begin authentication relate functions
const signUpSuccess = function (data) {
  // console.log(data)
  $('#messages').html('You have signed up successfully. Now login.')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#messages').html('Sign up has <span style="color:#f4c542">failed</span>. Please try again.')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#messages').html('You have signed in successfully').fadeOut(8000)
  // we have to store the user data or header somwhere.  so we will put it in ../store.js
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#messages').show().html('Sign In <span style="color:#f4c542">failed</span>. Please check your username/password and try again').fadeOut(8000)
}

const signOutSuccess = function () {
  // $('.welcome-box').show()
  $(':input', '#sign-in').val('')
  // $(':input', '#enter-player').val('')
  $('#messages').html('You have signed out successfully').fadeOut(8000)
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#messages').html('Sign Out <span style="color:#f4c542">Failed</span>')
}

const changePWSuccess = function () {
  $('#messages').show().html('You have successfully changed your password').fadeOut(8000)
  $(':input', '#change-password').val('')
  $('#change-password').hide()
}

const changePWFailure = function (error) {
  console.error(error)
  $('#messages').html('Change of Password  <span style="color:#f4c542">Failed</span>. Check your your password input and please try again.').show().fadeOut(8000)
}

const notUniquePw = function () {
  $('#messages').html('Your new password is the same as the current password.  Please enter a different password.').show().fadeOut(8000)
}

const pwDontMatch = function () {
  $('#messages').html('The passwords entered to not match. Please try again.').show().fadeOut(8000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePWSuccess,
  changePWFailure,
  notUniquePw,
  pwDontMatch
}

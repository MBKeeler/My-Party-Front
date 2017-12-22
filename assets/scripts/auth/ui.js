'use strict'
const store = require('../store')

// begin authentication relate functions
const signUpSuccess = function (data) {
  // console.log(data)
  $('#messages').show()
  $('#messages').html('You have signed up successfully. Now login.').fadeOut(8000)
}

const signUpFailure = function (error) {
  console.error(error)
  $('#messages').show()
  $('#messages').html('Sign up has <span style="color:#f4c542">failed</span>. Please try again.').fadeOut(8000)
}

const signInSuccess = function (data) {
  // console.log(data)
  $('#messages').html('You have signed in successfully').fadeOut(8000)
  // we have to store the user data or header somwhere.  so we will put it in ../store.js
  store.user = data.user
  // console.log('user data is:', data.user)
  // hides the sign in/sign up button and forms
  $('#show_auth_forms').hide()
  $('#login_forms').hide()
  $('#landing_page_panel').hide()
  $('#all_beverages_panel').hide()
  $('#my_beverages_panel').hide()
  // reveals the pw change and logout buttons
  $('#change_pw_bttn').show()
  $('#change_pw_container').show()
  $('#sign-out').show()
  // reveals the user's Beverage panel
  $('#welcome_panel').show()
}

const signInFailure = function (error) {
  console.error(error)
  $('#messages').show().html('Sign In <span style="color:#f4c542">failed</span>. Please check your username/password and try again').fadeOut(8000)
}

const signOutSuccess = function () {
  // hide the change pw form, change pw button and logout button
  $('#change_pw_bttn').hide()
  $('#change_pw_container').hide()
  $('#sign-out').hide()
  // mesage to user
  $('#messages').html('You have signed out successfully')
  // empty and hide the user's panels
  $('#welcome_panel').hide()
  $('#my_beverages_panel').empty().hide()
  $('#add_beverage_panel').empty().hide()
  $('#all_beverages_panel').empty().hide()
  // show the sign in/sign out button and forms
  $('#show_auth_forms').show()
  // collpses the login forms before they are shown again
  $('#login_forms').collapse('hide').show()
  $(':input', '#sign-in').val('')
  // show the all beverages Panel
  $('#landing_page_panel').show()
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
  $('#change-password').collapse('hide')
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

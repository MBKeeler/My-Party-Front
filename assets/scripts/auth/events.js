'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
//const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const app_api = require('../app/app_api')
const app_ui = require('../app/app_ui')

// Authentication handlers

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('sign-up', data)
  // check to make sure pws match
  if (data.credentials.password !== data.credentials.password_confirmation) {
    ui.pwDontMatch()
  } else {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }
}

// for sign in
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('sign-in', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// for signOut

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
// console.log('onSignOut: ', data)
  //  console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// for change password
const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')
  const data = getFormFields(this)
  // console.log(data)
  // console.log(data.passwords.old, data.passwords.new)
  // check to make sure pws are different
  if (data.passwords.old === data.passwords.new) {
    ui.notUniquePw()
  } else {
    api.changePassWord(data)
      .then(ui.changePWSuccess)
      .catch(ui.changePWFailure)
  }
}

// being exeternal db events

const randomBeverageOnLoad = function (event) {
  console.log('randomBeverageOnLoad called')
  app_api.getRandomCoctail()
    .then(app_ui.getRamdomBeverageSuccess)
    .catch(app_ui.getRamdomBeverageFailure)
}

const searchTheCoctailDbByName = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('searchTheCoctailDbByName called with data:', data)
  app_api.cockTailDbNameSearch(data)
    .then(app_ui.getExternalBeverageSuccess)
    .catch(app_ui.getExternalBeverageFailure)
}

// begin app events

const onAddBeverage = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onAddBeverage called with data:', data)
  app_api.addBeverage(data)
    .then(app_ui.addBeverageSuccess)
    .catch(app_ui.addBeverageFailure)
}

const onViewAllBeverages = function () {
  event.preventDefault()
  app_api.listAllBeverages()
    .then(app_ui.viewAllBeveragesSuccess)
    .catch(app_ui.viewAllBeveragesFailure)
}

const onViewMyBeverages = function () {
  console.log('onViewMyBeverages called')
  event.preventDefault()
  app_api.listAllUserBeverages()
    .then(app_ui.viewMyBeveragesSuccess)
    .catch(app_ui.viewMyBeveragesFailure)
}

const onDeleteBeverage = function (event) {
  console.log('onDeleteBeverage called')
  event.preventDefault()
  const data = $(event.target).attr('value')
  // console.log('data', data)
  app_api.deleteBeverage(data)
    .then(app_ui.deleteBeverageSuccess)
    .catch(app_ui.deleteBeverageFailure)
}

// navigation bar button methods

const onGoAddBeverage = function (event) {
  event.preventDefault()
  console.log('onGoAddBeverage called')
  app_ui.goToAddBeverage()
}

const onGoAllBeverages = function (event) {
  event.preventDefault()
  app_ui.goToAllBeverages()
}

const onGoMyBeverages = function (event) {
  event.preventDefault()
  app_ui.goToMyBeverages()
}

const onHideChngePwForm = function (event) {
  app_ui.hideChngePwForm()
}

// Handlers
const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  // begin external db related Handlers
  $(document).ready(randomBeverageOnLoad)
  $('#search_externalDB_form').on('submit', searchTheCoctailDbByName)
  // begin app event handlers
  $('#add_beverage_form').on('submit', onAddBeverage)
  $('#my_beverages_target').on('click', '#delBvgBttn', onDeleteBeverage)
  // begin app navigation handlers
  $('#go_add_beverage').on('click', onGoAddBeverage)
  $('#go_all_beverages').on('click', onGoAllBeverages).on('click', onViewAllBeverages)
  $('#go_my_beverages').on('click', onGoMyBeverages).on('click', onViewMyBeverages)
  $('#cancel').on('click', onHideChngePwForm)
}

module.exports = {
  addHandlers
}

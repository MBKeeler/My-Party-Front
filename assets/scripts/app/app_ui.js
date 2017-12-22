'use strict'
// const store = require('../store')
// const myTemplate = require('../templates/temlate.handlebars')
const viewAllBeveragesTemplate = require('../templates/all-beverages.handlebars')
const randomBeveragesTemplate = require('../templates/random-coctaildb-beverage.handlebars')
const myBeveragesTemplate = require('../templates/edit-delete-beverages.handlebars')

// external beverage db methods

const getRamdomBeverageSuccess = function (data) {
  $('#messages').show().html('We hope you enjoy this beverage!').fadeOut(8000)
  console.log('getRamdomBeverageSuccess data is:', data)
  const showRandomBevHtml = randomBeveragesTemplate({ drinks: data.drinks })
  $('#random_bev_target').append(showRandomBevHtml)
}

const getRamdomBeverageFailure = function (error) {
  console.error(' Failed to retreive a random beverage: ', error)
  $('#messages').show().html('There was a problem getting a random beverage for you.').fadeOut(8000)
}

const getExternalBeverageSuccess = function (data) {
  console.log('getRamdomBeverageSuccess data is:', data)
  const showExternalDBListHTML = randomBeveragesTemplate({ drinks: data.drinks })
  $('#search_externalDB_target').append(showExternalDBListHTML)
}

const getExternalBeverageFailure = function (error) {
  console.error(' Failed to retreive a beverage from thecoctaildb.com: ', error)
  $('#messages').show().html('There was a problem getting a your beverage from thecoctaildb.com.  Try again later.').fadeOut(8000)
}

// Start of beverage app action methods

  // add beverage
const addBeverageSuccess = function () {
  $('#messages').show().html('Beverage was added successfully').fadeOut(8000)
  $(':input', '#add_beverage_form').val('')
}
const addBeverageFailure = function (error) {
  console.error('enterPlayer failed: ', error)
  $('#messages').show().html('There was a problem adding your beverage. Please check that all fields were filled out correctly.').fadeOut(8000)
}

  // list all beverages
const viewAllBeveragesSuccess = function (data) {
  console.log('viewAllBeveragesSuccess data is :', data)
  const showAllBevsHtml = viewAllBeveragesTemplate({ beverages: data.beverages })
  $('#all_beverages_target').empty()
  $('#all_beverages_target').append(showAllBevsHtml)
}

const viewAllBeveragesFailure = function (error) {
  console.error('listAllBeverages failed: ', error)
  $('#messages').show().html('There was a problem getting a list of all beverages.').fadeOut(8000)
}

  // list my_beverages
const viewMyBeveragesSuccess = function (data) {
  const showMyBevsHtml = myBeveragesTemplate({ beverages: data.beverages })
  $('#my_beverages_target').empty()
  $('#my_beverages_target').append(showMyBevsHtml)
}

const viewMyBeveragesFailure = function (error) {
  console.error('listAllBeverages failed: ', error)
  $('#messages').show().html('There was a problem getting a list of your beverages.').fadeOut(8000)
}

  // delete my beverage

const deleteBeverageSuccess = function () {
  $('#messages').show().html('Beverage deleted successfully').fadeOut(8000)
}

const deleteBeverageFailure = function (error) {
  console.error('deleteBeverage failed: ', error)
  $('#messages').show().html('There was a problem deleting the beverage.').fadeOut(8000)
}

  // show my beverage
const showMyBeverageSuccess = function (data) {
  // clears the display area for next selection
  $('#rating_target, #name_target, #name_target, #description_target, #recipe_target, #occasion_target, #instructions_target').empty()
  // clears the udate form values for the next selection
  $('#mod_id, #mod_rating, #mod_name, #mod_description, #mod_recipe, #mod_occasion, #mod_instructions').val('')
  $('#rating_target').append(data.beverage.rating)
  $('#name_target').append(data.beverage.name)
  $('#description_target').append(data.beverage.description)
  $('#recipe_target').append(data.beverage.recipe)
  $('#occasion_target').append(data.beverage.occasion)
  $('#instructions_target').append(data.beverage.instructions)
  // prefils update form with selection
  $('#mod_id').val(data.beverage.id)
  $('#mod_rating').val(data.beverage.rating)
  $('#mod_name').val(data.beverage.name)
  $('#mod_description').val(data.beverage.description)
  $('#mod_recipe').val(data.beverage.recipe)
  $('#mod_occasion').val(data.beverage.occasion)
  $('#mod_instructions').val(data.beverage.instructions)
}

const showMyBeverageFailure = function (error) {
  console.error('showUserBeverage failed: ', error)
  $('#messages').show().html('There was a problem loading your beverage.').fadeOut(8000)
}

  // update a beverage

const modifyBeverageSuccess = function () {
  $('#messages').show().html('Beverage Updated.').fadeOut(8000)
  // clears the display area for next selection
  $('#rating_target, #name_target, #name_target, #description_target, #recipe_target, #occasion_target').empty()
  // clears the udate form values for the next selection
  $('#mod_id, #mod_rating, #mod_name, #mod_description, #mod_recipe, #mod_occasion').val('')
}

const modifyBeverageFailure = function (error) {
  console.error('modifyBeverage failed: ', error)
  $('#messages').show().html('There was a problem updating your beverage.').fadeOut(8000)
}

// begin navigation methods
const goToAddBeverage = function () {
  $('#all_beverages_panel').hide()
  $('#my_beverages_panel').hide()
  $('#welcome_panel').hide()
  $('#add_beverage_panel').show()
}

const goToAllBeverages = function () {
  $('#my_beverages_panel').hide()
  $('#add_beverage_panel').hide()
  $('#welcome_panel').hide()
  $('#all_beverages_panel').show()
}

const goToMyBeverages = function () {
  $('#add_beverage_panel').hide()
  $('#all_beverages_panel').hide()
  $('#welcome_panel').hide()
  $('#my_beverages_panel').show()
  $('#exampleAccordion1').collapse('hide')
}

const goToWelcome = function () {
  $('#add_beverage_panel').hide()
  $('#all_beverages_panel').hide()
  $('#my_beverages_panel').hide()
  $('#welcome_panel').show()
}

const hideChngePwForm = function () {
  $(':input', '#change-password').val('')
  $('#change_pw').collapse('hide')
}

module.exports = {
  getRamdomBeverageSuccess,
  getRamdomBeverageFailure,
  getExternalBeverageSuccess,
  getExternalBeverageFailure,
  addBeverageSuccess,
  addBeverageFailure,
  viewAllBeveragesSuccess,
  viewAllBeveragesFailure,
  viewMyBeveragesSuccess,
  viewMyBeveragesFailure,
  deleteBeverageSuccess,
  deleteBeverageFailure,
  showMyBeverageSuccess,
  showMyBeverageFailure,
  modifyBeverageSuccess,
  modifyBeverageFailure,
  goToAddBeverage,
  goToAllBeverages,
  goToMyBeverages,
  goToWelcome,
  hideChngePwForm
}

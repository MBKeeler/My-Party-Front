'use strict'
// const store = require('../store')

// const myTemplate = require('../templates/temlate.handlebars')
const viewAllBeveragesTemplate = require('../templates/all-beverages.handlebars')
const randomBeveragesTemplate = require('../templates/random-coctaildb-beverage.handlebars')
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
  // handlebars template code to go here
}

const getExternalBeverageFailure = function (error) {
  console.error(' Failed to retreive a beverage from thecoctaildb.com: ', error)
  $('#messages').show().html('There was a problem getting a your beverage from thecoctaildb.com.  Try again later.').fadeOut(8000)
}

// beverage app action methods
const addBeverageSuccess = function () {
  $('#messages').show().html('Beverage was added successfully').fadeOut(8000)
  $(':input', '#enter-player').val('')
}
const addBeverageFailure = function (error) {
  console.error('enterPlayer failed: ', error)
  $('#messages').show().html('There was a problem adding your beverage. Please check that all fields were filled out correctly.').fadeOut(8000)
}

const viewAllBeveragesSuccess = function (data) {
  console.log('viewAllBeveragesSuccess data is :', data)
  const showAllBevsHtml = viewAllBeveragesTemplate({ beverages: data.beverages })
  $('#all_beverages_target').append(showAllBevsHtml)
}

const viewAllBeveragesFailure = function (error) {
  console.error('listAllBeverages failed: ', error)
  $('#messages').show().html('There was a problem getting a list of all beverages.').fadeOut(8000)
}

// begin navigation methods
const goToAddBeverage = function () {
  $('#all_beverages_panel').hide()
  $('#my_beverages_panel').hide()
  $('#add_beverage_panel').show()
}

const goToAllBeverages = function () {
  $('#my_beverages_panel').hide()
  $('#add_beverage_panel').hide()
  $('#all_beverages_panel').show()
}

const goToMyBeverages = function () {
  $('#add_beverage_panel').hide()
  $('#all_beverages_panel').hide()
  $('#my_beverages_panel').show()
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
  goToAddBeverage,
  goToAllBeverages,
  goToMyBeverages
}

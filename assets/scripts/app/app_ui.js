'use strict'
const store = require('../store')

const addBeverageSuccess = function () {
  $('#messages').show().html('Beverage was added successfully').fadeOut(8000)
  $(':input', '#enter-player').val('')
}
const addBeverageFailure = function (error) {
  console.error('enterPlayer failed: ', error)
  $('#messages').show().html('There was a problem adding your beverage.').fadeOut(8000)
}

module.exports = {
  addBeverageSuccess,
  addBeverageFailure
}

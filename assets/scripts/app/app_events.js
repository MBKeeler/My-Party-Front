'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const app_api = require('./app_api')
const app_ui = require('./app_ui')

const onAddBeverage = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onAddBeverage called with data:', data)
  app_api.addBeverage(data)
    .then(app_ui.addBeverageSuccess)
    .catch(app_ui.addBeverageFailure)
}

const addHandlers = function () {
  $('#add_bevarage_form').on('submit', onAddBeverage)
}

module.exports = {
  addHandlers
}

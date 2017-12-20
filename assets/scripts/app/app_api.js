'use strict'

const config = require('../config')
const store = require('../store')
const cockTailDbName = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const randomCoctail = 'http://www.thecocktaildb.com/api/json/v1/1/random.php'

// search thecocktaildb.com

const cockTailDbNameSearch = function (data) {
  console.log('app_api.cockTailDbSearch called', data)
  return $.ajax({
    url: cockTailDbName + data,
    method: 'GET'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    // data
  })
}

const getRandomCoctail = function () {
  console.log('app_api.getRandomCoctail called')
  return $.ajax({
    url: randomCoctail,
    method: 'GET'
    // headers: {
    //   Authorization: 'Token token=' + store.user.token
    // },
    // data
  })
}

// Rails api

const listAllBeverages = function () {
  console.log('listAllBeverages called')
  return $.ajax({
    url: config.apiOrigin + '/beverages',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addBeverage = function (data) {
  console.log('app_api.addBeverage called:', data)
  return $.ajax({
    url: config.apiOrigin + '/beverages',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const modifyBeverage = function (data) {
  console.log('app_api.modifyBeverage called: ', data.beverage.id)
  const beverageId = data.beverage.id
  return $.ajax({
    url: config.apiOrigin + '/beverages/' + beverageId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteBeverage = function (data) {
//  console.log('deleteBeverage called')
  return $.ajax({
    url: config.apiOrigin + '/beverages/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  cockTailDbNameSearch,
  getRandomCoctail,
  listAllBeverages,
  addBeverage,
  modifyBeverage,
  deleteBeverage
}

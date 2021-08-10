'use strict'

const store = require('./../store')
const config = require('./../config')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const changePassword = function () {
return $.ajax({
url: config.apiUrl + '/change-password',
method: 'PATCH',
data: data,
headers: {
 Authorization: 'Bearer ' + store.token
}
})
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}

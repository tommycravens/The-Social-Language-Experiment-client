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

const createVocab = function () {
return $.ajax({
url: config.apiUrl + '/create-vocab',
method: 'POST',
data: data,
// not sure if this will need more
})
}

const readVocab = function () {
return $.ajax({
url: config.apiUrl + '/read-vocab',
method: 'POST',
data,
// not sure what else is needed
})
}

const updateVocab = function () {
return $.ajax({
url: config.apiUrl + '/update-vocab',
method: 'PATCH',
data,
headers: {
  Authorization: 'Bearer ' + store.token
  }
// not sure what will be needed here just yet.
})
}

const deleteVocab = function () {
return $.ajax({
url: config.apiUrl + '/delete-vocab',
method: 'DELETE',
 headers: {
    Authorization: 'Bearer ' + store.token
    }
})
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createVocab,
  readVocab,
  updateVocab,
  deleteVocab
}

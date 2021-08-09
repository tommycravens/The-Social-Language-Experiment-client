'use strict'

const store = require("./../store")

const onSignUpSuccess = (response) => {
  $("#message").text(`Thank you for signing up ${response.user.email}`)
  $("#sign-up-form").trigger("reset")
  $("#sign-in-form").css('display', 'block')
  $("#sign-in-header").css('display', 'block')
  $("#sign-up-form").css('display', 'none')
  $("#sign-up-header").css('display', 'none')
}

const onSignInSuccess = (response) => {
  $("#message").text(`Sign-in was successful ${response.user.email}`)
  store.token = response.user.token
  $("#sign-in-form").trigger("reset")
  $("#sign-out").css('display', 'block')
  $("#sign-out-header").css('display', 'block')
  $("#sign-in-form").css('display', 'none')
  $("#sign-in-header").css('display', 'none')
  $("#sign-up-form").css("display", "none")
  $("#sign-up-header").css("display", "none")
  $(".container").css("display", "block")
}

const onSignOutSuccess = () => {
  $("#message").text(`Sign-out was successful!`)
  $("#sign-out").trigger("reset")
  $("#sign-in-form").css('display', 'block')
  $("#sign-in-header").css('display', 'block')
  $("#sign-up-form").css('display', 'block')
  $("#sign-up-header").css('display', 'block')
  $("#sign-out").css('display', 'none')
  $("#sign-out-header").css('display', 'none')
}

const onFailure = (error) => {
  console.log(`Error, status: ${error.status}`)
  $("#message").text(`Error... status: ${error.status}`)
  $("#sign-up-form").trigger("reset")
}

module.exports = {
  onSignUpSuccess,
  onFailure,
  onSignInSuccess,
  onSignOutSuccess
}

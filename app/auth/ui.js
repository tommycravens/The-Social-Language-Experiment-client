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
  $("#change-password").css("display", "block")
  $("#change-password-header").css("display", "block")
  // all of these may move to when the actually corresponding button is clicked instead of just on sign in.
  // $("#create-vocab-form").css("display", "block")
  // $("#read-vocab-form").css("display", "block")
  // $("#update-vocab-form").css("display", "block")
  // $("#delete-vocab-form").css("display", "block")
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
  $("#change-password").css("display", "none")
  $("#change-password-header").css("display", "none")
  $(".container").css("display", "none")
  $("#create-vocab-form").css("display", "none")
  $("#read-vocab-form").css("display", "none")
  $("#update-vocab-form").css("display", "none")
  $("#delete-vocab-form").css("display", "none")
}


// I am not totally sure I want the ui to act in these yet. I know that I want the form fields for CRUD to only come up when you press the main button, but I need to think on how I will do that.
const onChangePasswordSuccess = () => {

}

const onCreateVocabSuccess = () => {

}

const onReadVocabSuccess = () => {

}

const onUpdateVocabSuccess = () => {

}

const onDeleteVocabSuccess = () => {

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
  onSignOutSuccess,
  onChangePasswordSuccess,
  onCreateVocabSuccess,
  onReadVocabSuccess,
  onUpdateVocabSuccess,
  onDeleteVocabSuccess
}

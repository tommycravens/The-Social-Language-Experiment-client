'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $("#sign-up-form").on("submit", authEvents.onSignUp)
  $("#sign-in-form").on("submit", authEvents.onSignIn)
  $("#sign-out").on("click", authEvents.onSignOut)
  $("#change-password").on("submit", authEvents.onChangePassword)
  $('.btn').on('click', authEvents.showForm)
  $("#create-vocab-form").on("submit", authEvents.onCreateVocab)
  $("#read-vocab-form").on("submit", authEvents.onReadVocab)
  $("#update-vocab-form").on("submit", authEvents.onUpdateVocab)
  $("#delete-vocab-form").on("submit", authEvents.onDeleteVocab)
})

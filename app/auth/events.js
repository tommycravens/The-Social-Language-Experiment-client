const getFormFields = require("../../lib/get-form-fields")
const api = require("./api")
const ui = require("./ui")
const store = require("./../store")


const onSignUp = function (event) {
  event.preventDefault()
  console.log("Hello")
  //get info from event and form
  const form = event.target
  console.log(form)

  const data = getFormFields(form)
  console.log(data)

  //make an api call using ajax
  api.signUp(data)
  .then(ui.onSignUpSuccess)
  .catch(ui.onFailure)

  //Handle successful api calls with .then
  //handle the failed api call with .catch
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log("Hello")
  //get info from event and form
  const form = event.target
  console.log(form)

  const data = getFormFields(form)
  console.log(data)

  //make an api call using ajax
  api.signIn(data)
  .then(ui.onSignInSuccess)
  .catch(ui.onFailure)

  //Handle successful api calls with .then
  //handle the failed api call with .catch
}

const onChangePassword = function (event) {
  event.preventDefault()

  api.changePassword(data)
  .then(ui.onChangePasswordSuccess)
  .catch(ui.onFailure)
}

onCreateVocab = (event) => {
  event.preventDefault()
  const vocabData = getFormFields(event.target)

  api.createVocab(vocabData)
  .then(ui.onCreateVocabSuccess)
  .catch(ui.onFailure)
}

onUpdateVocab = (event) => {
event.preventDefault()
const vocabData = getFormField(event.target)
console.log(data)
const id = data.vocab.id
api
  .updateVocab(vocabId, vocabData)
  .then(ui.readVocab)
  .then(ui.onReadVocabSuccess)
  .catch(ui.onFailure)
  .then(ui.onUpdateVocabSuccess)
  .catch(ui.onFailure)
}

onDeleteVocab = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.deleteVocab(data.vocab.id)
  .then(api.readVocab)
  .then(ui.onReadVocabSuccess)
  .catch(ui.onFailure)
  .then(ui.onDeleteVocabSuccess)
  .catch(ui.onFailure)
}

onReadVocab = (event) => {
  event.preventDefault()
  api.readVocab()
  .then(ui.onReadVocabSuccess)
  .catch(ui.onFailure)
}


const onSignOut = function () {
  api.signOut()
  .then(ui.onSignOutSuccess)
  .catch(ui.onFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onReadVocab,
  onUpdateVocab,
  onCreateVocab,
  onDeleteVocab
}
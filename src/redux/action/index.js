import { CHANGEBODY, CHANGETITLE, EDIT, FETCHCOMPLEATE, TITLEROULS, LOGIN, LOGOUT, MESSAGE, SAVEREQUESTEND, SAVEREQUESTSTART, BODYROULS } from "./type"

export const FlashMessageAction = (msg) => {
  let action = {
    type: MESSAGE,
    massege: msg,
  }
  return action
}

export const LoginAction = (res) => {
  let action = {
    type: LOGIN,
    data: res,
  }
  return action
}

export const LogoutAction = () => {
  let action = {
    type: LOGOUT,
  }
  return action
}

export const FetchPostAction = (res) => {
  let action = {
    type: FETCHCOMPLEATE,
    value: res,
  }
  return action
}

export const ChangeTitle = (res) => {
  let action = {
    type: CHANGETITLE,
    value: res,
  }

  return action
}

export const ChangeBody = (res) => {
  let action = {
    type: CHANGEBODY,
    value: res,
  }

  return action
}

export const Edite = () => {
  let action = {
    type: EDIT,
  }
  return action
}

export const SaveStart = () => {
  let action = {
    type: SAVEREQUESTSTART,
  }
  return action
}

export const SaveEnd = () => {
  let action = {
    type: SAVEREQUESTEND,
  }
  return action
}

export const TitleRoule = (res) => {
  let action = {
    type: TITLEROULS,
    value: res,
  }
  return action
}
export const BodyRoule = (res) => {
  let action = {
    type: BODYROULS,
    value: res,
  }
  return action
}

import { LOGIN, LOGOUT, MESSAGE } from "./type"

export const FlashMessage = () => {
  return {
    type: MESSAGE,
    massege: "good",
  }
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

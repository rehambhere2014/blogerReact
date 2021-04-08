import { LOGIN, LOGOUT, MESSAGE } from "../action/type"

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true, user: action.data }
    case LOGOUT:
      return { ...state, isLogin: false }
    case MESSAGE:
      return { ...state, flassMessage: state.flassMessage.concat(action.massege) }
    default:
      return state
  }
}

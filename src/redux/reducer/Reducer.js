export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true, user: action.data }
    case "LOGOUT":
      return { ...state, isLogin: false }

    default:
      return state
  }
}

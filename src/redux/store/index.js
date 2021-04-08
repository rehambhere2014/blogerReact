export const initiaState = {
  isLogin: Boolean(localStorage.getItem("token")),
  flassMessage: [],
  user: {
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
    avatar: localStorage.getItem("avatar"),
  },
}

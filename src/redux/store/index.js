export const initiaState = {
  isLogin: Boolean(localStorage.getItem("token")),
  user: {
    token: localStorage.getItem("token"),
    username: localStorage.getItem("username"),
    avatar: localStorage.getItem("avatar"),
  },
}

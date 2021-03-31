import React, { useState, useReducer, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import axios from "axios"

import HomeGuest from "./components/homeguest/HomeGuest"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import CreatePost from "./components/post/CreatePost"
import SignUp from "./components/signup/SignUp"
import { reducer } from "./redux/reducer/Reducer"
import { initiaState } from "./redux/store/index"
import { StateContext } from "./redux/context/StateContext"
import { DispatchContext } from "./redux/context/DispatchContext"
import Profile from "./components/profile/Profile"
import Post from "./components/profile/Post"

axios.defaults.baseURL = "http://localhost:8089/"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initiaState)
  useEffect(() => {
    if (state.isLogin) {
      localStorage.setItem("token", state.user.token)
      localStorage.setItem("username", state.user.username)
      localStorage.setItem("avatar", state.user.avatar)
    } else {
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      localStorage.removeItem("avatar")
    }
  }, [state.isLogin])
  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact>
                {state.isLogin ? <Home /> : <HomeGuest />}
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/create-post">
                <CreatePost />
              </Route>
              <Route path="/profile/:username">
                <Profile />
              </Route>
              <Route path="/post/:id">
                <Post />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  )
}

import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

import "./fonts/sporting-grotesque/Regular/Sporting_Grotesque-Regular_web.ttf"
import "./fonts/sporting-grotesque/Bold/Sporting_Grotesque-Bold_web.ttf"
import { BrowserRouter } from "react-router-dom"
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)

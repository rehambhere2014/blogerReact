import React, { useContext } from "react"
import { StateContext } from "../../redux/context/StateContext"
import HeaderLogin from "./HeaderLogin"
import HeaderLogout from "./HeaderLogout"
import { Button, HeaderBox, Navabar, NavbarLogo, LinkItem, NavbarButton, HeaderLogo } from "./headerstyle"

export default function Header(props) {
  let appState = useContext(StateContext)
  console.log(appState)
  return (
    <HeaderBox>
      <div className="container">
        <Navabar>
          <HeaderLogo>
            {/* <img src="./images/logo.svg" /> */}
            <NavbarLogo to="/">Writescape</NavbarLogo>
          </HeaderLogo>

          {appState.isLogin ? <HeaderLogin /> : <HeaderLogout />}
        </Navabar>
      </div>
    </HeaderBox>
  )
}

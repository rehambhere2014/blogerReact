import React from "react"
import { Link } from "react-router-dom"
import { Button, HeaderBox, Navabar, NavbarLogo, LinkItem, NavbarButton } from "./headerstyle"

export default function HeaderLogout() {
  return (
    <NavbarButton>
      <LinkItem to="/login">
        <Button login={true}>login</Button>
      </LinkItem>{" "}
      <LinkItem to="/signup">
        <Button>signup</Button>
      </LinkItem>
    </NavbarButton>
  )
}

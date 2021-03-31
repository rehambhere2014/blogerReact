import React from "react"
import { FooterBg, FooterBox, FooterLogo, NavBox, NavLi, NavLinks, NavList } from "./FooterStyle"

export default function Footer() {
  return (
    <FooterBg>
      <div className="container">
        <FooterBox>
          <h4>Be the first to know about brand new posts, updates and jobs.</h4>

          <NavBox>
            <NavList>
              <NavLi>
                <NavLinks>Instegram</NavLinks>
              </NavLi>
              <NavLi>
                <NavLinks>Home</NavLinks>
              </NavLi>
              <NavLi>
                <NavLinks>About</NavLinks>
              </NavLi>
              <NavLi>
                <NavLinks>Terms</NavLinks>
              </NavLi>
              <NavLi>
                <NavLinks>Twitter</NavLinks>
              </NavLi>
              <NavLi>
                <NavLinks>Facebook</NavLinks>
              </NavLi>
            </NavList>
          </NavBox>

          <FooterLogo>
            <span>writescape</span>
          </FooterLogo>
        </FooterBox>
      </div>
    </FooterBg>
  )
}

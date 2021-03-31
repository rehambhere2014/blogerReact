import { Link } from "react-router-dom"
import styled from "styled-components"
import { device } from "../../utilits/mediaquary"

export const FooterBg = styled.div`
  background: var(--mid-color);
  text-align: center;
  padding: 5rem 0 0 0;
  color: white;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    background-image: url("./images/wave.svg");
    width: 100%;
    height: 100%;
    top: -5px;
    right: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: top;
  }
  height: auto;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("./images/bg.svg");
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
  }
`

export const FooterLogo = styled.div`
  display: block;
  font-size: 10vw;
  text-transform: capitalize;
  font-family: "Sporting Grotesque";
  letter-spacing: 0px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  z-index: 1;
`

export const FooterBox = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 2rem;
`

export const NavLi = styled.li`
  flex-basis: 33.333%;
  max-width: 33.333%;
  margin-bottom: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
  @media ${device.mobileM} {
    width: 100%;
    flex: 1;
  }
`

export const NavLinks = styled(Link)`
  text-decoration: none;
  color: white;
`

export const NavBox = styled.div`
  margin-top: 4rem;
  @media ${device.mobileM} {
    margin-top: 8rem;
  }
`

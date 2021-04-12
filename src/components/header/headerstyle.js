import { Link } from "react-router-dom"
import styled from "styled-components/macro"

import { device } from "../../utilits/mediaquary"

export const HeaderBox = styled.div`
    padding: 1.1rem 0;
    box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
    z-index: 9999;
    position: fixed;
    width: 100%;
    background: white;
}
`
export const Navabar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const NavbarLogo = styled(Link)`
  background-position: 0;
  background-repeat: no-repeat;
  background-size: 38px;
  padding-left: 38px;
  min-height: 38px;
  display: flex;
  align-items: center;
  line-height: 1;
  background-image: url(${(props) => props.bg});
  font-size: 18px;
  color: var(--main-color);
  font-weight: normal;
  cursor: pointer;
  text-decoration: none;
`
export const HeaderLogo = styled.h1`
  flex: 2;
`
export const Button = styled.button`
  padding: 10px 20px;
  border: none;

  cursor: pointer;
  font-size: 18px;
  letter-spacing: 1px;
  background: ${(props) => (props.login ? "white" : "var(--first-color)")};
  color: ${(props) => (props.login ? "var(--first-color)" : "white")};
  border: 1px solid var(--first-color);
  width: 100%;
  display: flex;
  justify-content: space-between;
  &:hover {
    background: var(--first-color);
    box-shadow: 0 8px 4px var(--body-color);
    color: white;
  }
`
export const LinkItem = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
`

export const LinkItemProfile = styled(Link)`
  text-decoration: none;
  width: 30px;
  cursor: pointer;
`
export const ImageProfile = styled.img`
  border-radius: 50%;
  width: 100%;
  vertical-align: middle;
`

export const NavbarButton = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-left: 30px;
  align-items: center;
  @media ${device.mobileM} {
    justify-content: flex-end;
    margin-left: 0;
  }
`

import styled from "styled-components/macro"

import { device } from "../../utilits/mediaquary"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
  padding: var(--pading-top) 0 5rem 0;
  max-width: 732px;
  margin: auto;
`

export const ProfileBox = styled.div`
  margin: auto;
`
export const ProfileHeader = styled.h2`
  color: var(--mid-color);
`

export const ProfileNav = styled.div`
  display: flex;

  align-items: center;
  margin: 2.5rem 0 0 0;
  border-bottom: ${(props) => (props.active ? " " : "1px solid var(--mid-color)")};
  text-align: center;
`

export const ProfileLink = styled(Link)`
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  text-decoration: none;
  padding: 5px 20px;
  text-align: center;
  font-size: 10px;

  @media ${device.mobileM} {
    font-size: 15px;
  }

  border-top: ${(props) => (props.active ? "1px solid " : "")};
  border-left: ${(props) => (props.active ? "1px solid " : "")};
  border-right: ${(props) => (props.active ? "1px solid " : "")};
  color: var(--mid-color);
`

export const ProfileList = styled.div`
  margin-top: 20px;
`

export const ProfileListItem = styled(Link)`
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border: 2px solid var(--mid-color);
  padding: 10px;
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  color: var(--main-color);

  &:hover {
    background: var(--mid-color);
    color: white;
    border: 2px solid #ccc;
  }
`
export const ImageProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 5px;
  vertical-align: middle;
  position: relative;
  top: -3px;
`

export const ButtonProfile = styled.button`
  margin-left: 10px;
  padding: 8px 15px;
  background-color: var(--main-color);
  color: white;
  font-size: 15px;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
  border-radius: 5px;
`
export const DateSpan = styled.span`
  float: right;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 2;
`

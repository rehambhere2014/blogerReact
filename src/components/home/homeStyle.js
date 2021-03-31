import styled from "styled-components/macro"

import { device } from "../../utilits/mediaquary"
import { Link } from "react-router-dom"

export const HomeSection = styled.div`
  padding: var(--pading-top) 0;
  text-align: center;
`

export const HomeLogo = styled.div`
  width: 30%;
`
export const Image = styled.img`
  width: 100%;
  vertical-align: middle;
`
export const HomeInfo = styled.div`
  margin-top: 2rem;
  @media ${device.mobileM} {
    margin-top: 5rem;
  }
`
export const Heading = styled.h2`
  font-size: 15px;
  @media ${device.mobileM} {
    font-size: 25px;
  }
`
export const HomeBox = styled.div`
  width: 70%;
  margin: auto;
  border: 3px solid var(--first-color);
  padding: 15px;
  margin-top: 1.5rem;
  box-shadow: var(--box-shadow);
`
export const Text = styled.p`
  font-size: 12px;

  font-style: italic;
  @media ${device.mobileM} {
    font-size: 15px;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

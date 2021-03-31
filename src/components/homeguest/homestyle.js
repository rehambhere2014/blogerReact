import styled from "styled-components"
import { device } from "../../utilits/mediaquary"

export const Home = styled.div`
  padding: var(--pading-top) 0;
`

export const HomeGuestBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`
export const Image = styled.img`
  width: 100%;
  display: none;
  @media ${device.mobileM} {
    display: block;
  }
`

export const HomeguestLeft = styled.div`
  padding: 0 20px;
  width: 100%;
  @media ${device.mobileM} {
    flex: 1;
  }
`

export const HomeguestRight = styled.div`
  flex: 1;
`

export const Heading = styled.h1`
  margin-bottom: 1rem;
  font-size: 25px;
  width: 100%;
  color: var(--mid-color);
  @media ${device.mobileM} {
    font-size: 2rem;
    margin-bottom: 0;
  }
`

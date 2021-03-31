import styled from "styled-components"
import { device } from "./utilits/mediaquary"
export const Header = styled.h1`
  color: red;

  @media ${device.mobileM} {
    color: green;
  }
`

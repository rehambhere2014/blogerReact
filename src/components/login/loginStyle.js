import styled from "styled-components/macro"

import { device } from "../../utilits/mediaquary"
import { Link } from "react-router-dom"

export const Form = styled.div`
  padding: var(--pading-top) 0 5rem 0;
`

export const FormBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
`

export const FormInput = styled.div`
  width: 100%;
  @media ${device.mobileM} {
    flex-basis: 40%;
    max-width: 40%;
  }
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  letter-spacing: -0.06em;
  font-weight: bold;
  color: var(--first-color);
`
export const FormSection = styled.form`
  margin-top: 2rem;
`
export const Label = styled.label`
  color: var(--light-color);
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.2;
  margin: 0;
  padding: 0;
`
export const InputSection = styled.input`
  display: block;
  width: 100%;
  padding: 15px 15px;
  margin-bottom: 30px;
  border: 1px solid var(--first-color);
  border-radius: none;
  &:focus {
    border-radius: none;
  }
`
export const Button = styled.button`
  display: block;
  width: 100%;
  color: white;
  background-color: var(--first-color);
  padding: 20px 15px;
  border: none;
  font-size: 20px;
  word-spacing: 2px;
`
export const Text = styled.p`
  color: var(--first-color);
  font-size: 15px;
  margin-top: 2rem;
`

export const FormLogo = styled.div`
  @media ${device.mobileM} {
    display: block;
    vertical-align: middle;
    max-width: 60%;
    width: 100%;
    /* flex-basis: 60%;
    max-width: 60%;

    */
  }
`

export const LinkItem = styled(Link)`
  color: var(--main-color);
  text-decoration: none;
  font-size: 18px;
  font-weight: normal;
`
export const Image = styled.img`
  display: none;
  width: 100%;
  @media ${device.mobileM} {
    display: block;
  }
`

import styled from "styled-components/macro"

import { device } from "../../utilits/mediaquary"

export const Form = styled.div`
  padding: var(--pading-top) 0 5rem 0;
`

export const FormBox = styled.div`
  margin: auto;
`

export const FormInput = styled.div`
  width: 70%;
  margin: auto;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: -0.06em;
  font-weight: bold;
  color: var(--first-color);
  @media ${device.mobileM} {
    font-size: 3rem;
  }
`
export const FormSection = styled.form`
  margin-top: 1rem;
  @media ${device.mobileM} {
    margin-top: 2rem;
  }
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
  margin-bottom: 15px;
  border: 1px solid var(--first-color);
  border-radius: none;
  &:focus {
    border-radius: none;
  }
  @media ${device.mobileM} {
    margin-bottom: 15px;
  }
`
export const Button = styled.button`
  display: inline-block;

  color: white;
  background-color: var(--first-color);
  padding: 15px;
  border: none;
  font-size: 15px;
  word-spacing: 2px;
  cursor: pointer;
  @media ${device.mobileM} {
    font-size: 20px;
  }
  &:disabled {
    background: #dddddd;
    cursor: not-allowed;
  }
`

export const Small = styled.small`
  display: block;
  color: red;
  font-size: 10px;
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 321px;
  margin-bottom: 5px;
  font-size: 1.5rem;
  padding: 15px 20px;
  line-height: 2;
`

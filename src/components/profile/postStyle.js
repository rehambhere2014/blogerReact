import styled from "styled-components/macro"

import { device } from "../../utilits/mediaquary"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
  padding: var(--pading-top) 0 5rem 0;
  max-width: 732px;
  margin: auto;
`

export const ImagePost = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 5px;
  vertical-align: middle;
  position: relative;
  top: -3px;
`

export const PostHeader = styled.div``

export const PostInfo = styled.div`
  margin-top: 20px;
`

export const PostBody = styled.div`
  margin-top: 20px;
`

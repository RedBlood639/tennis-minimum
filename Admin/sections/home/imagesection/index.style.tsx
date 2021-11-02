import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const ImageSectionWrapper = styled.div`
  width: 100%;
`

export const MatchDisplay = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  top: 150px;
  column-gap: 100px;
  font-size: 20px;
  transition-duration: 2s;
  @media screen and (max-width: 1320px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1150px) {
    top: 100px;
  }
  @media screen and (max-width: 818px) {
    display: none;
  }
`
export const ImageSectionLabel = styled.h1`
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: ${themeGet('colors.blue')};
  font-size: 65px;
  transition-duration: 0.5s;
  @media screen and (max-width: 1320px) {
    font-size: 50px;
  }
  @media screen and (max-width: 1150px) {
    display: none;
  }
`

export const ScrollDisplay = styled.div`
  max-height: 342px;
  overflow: auto;
`

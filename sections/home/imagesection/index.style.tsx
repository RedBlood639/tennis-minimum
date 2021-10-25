import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const ImageSectionWrapper = styled.div`
  width: 100%;
`
export const ImageSectionLabel = styled.h1`
  position: absolute;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  width: 100%;
  text-align: center;
  color: ${themeGet('colors.blue')};
  font-size: 70px;
  top: 120px;
  @media screen and (max-width: 1440px) {
    font-size: 70px;
    top: 120px;
  }
  @media screen and (max-width: 768px) {
    font-size: 50px;
    top: 80px;
  }
  @media screen and (max-width: 425px) {
    font-size: 35px;
    top: 80px;
  }
  @media screen and (max-width: 320px) {
    font-size: 25px;
    top: 80px;
  }
`

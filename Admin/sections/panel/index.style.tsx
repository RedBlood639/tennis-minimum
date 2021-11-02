import themeGet from '@styled-system/theme-get'
import styled from 'styled-components'

export const PanelWrapper = styled.div`
  width: 100%;
`
export const PanelContent = styled.div`
  text-align: center;
`

export const PanelLabel = styled.span`
  font-weight: 500;
  color: ${themeGet('colors.primary')};
  transition-duration: 0.5s;
  font-size: 85px;
  @media screen and (max-width: 1240px) {
    font-size: 75px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 70px;
  }
  @media screen and (max-width: 831px) {
    font-size: 50px;
  }
  @media screen and (max-width: 567px) {
    font-size: 40px;
  }
`

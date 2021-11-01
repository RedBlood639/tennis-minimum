import styled from 'styled-components'

export const PanelWrapper = styled.div``
export const PanelContent = styled.div``

export const PanelLabel = styled.span`
  font-weight: 500;

  /* font-family: 'Font1'; */
  transition-duration: 0.5s;
  font-size: 90px;
  @media screen and (max-width: 1240px) {
    font-size: 75px;
  }
  @media screen and (max-width: 1080px) {
    font-size: 70px;
  }
  @media screen and (max-width: 380px) {
    font-size: 40px;
  }
`

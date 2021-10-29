import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
export const HeaderWrapper = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  background: ${themeGet('colors.green')};
  padding: 0 20px;
  display: flex;
  align-items: 'center';
  justify-content: space-between;
`
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  cursor: pointer;
`

const HeaderLabel = styled.span`
  color: ${themeGet('colors.white')};
`
export const HeaderLogoLabel = styled(HeaderLabel)`
  font-size: 25px;
  @media screen and (max-width: 586px) {
    display: none;
  }
`
export const HeaderItemLabel = styled(HeaderLabel)`
  font-size: 20px;
`

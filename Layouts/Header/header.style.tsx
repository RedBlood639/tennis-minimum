import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
export const HeaderWrapper = styled.div`
  height: 60px;
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
`
export const HeaderItemLabel = styled(HeaderLabel)`
  font-size: 20px;
`

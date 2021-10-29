import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const FooterWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  column-gap: 18px;
  align-items: center;
  background-color: ${themeGet('colors.green')};
  height: 50px;
  width: 100%;
`
export const FooterCopyRight = styled.div`
  font-size: 17px;
  color: ${themeGet('colors.white')};
`

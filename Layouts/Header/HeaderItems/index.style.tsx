import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const ItemgroupWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`
export const HeaderButton = styled.button`
  padding: 0.5rem 0.7rem;
  border-radius: 0.3rem;
  cursor: pointer;
`
export const SignInButton = styled(HeaderButton)`
  background: ${themeGet('colors.green')};
  border: 1px solid ${themeGet('colors.white')};
  color: ${themeGet('colors.white')};
  &:hover {
    background: ${themeGet('colors.white')};
    color: ${themeGet('colors.black')};
  }
`

export const SignUpButton = styled(HeaderButton)`
  background: ${themeGet('colors.orange')};
  border: 1px solid ${themeGet('colors.orange')};
  color: ${themeGet('colors.white')};
  &:hover {
    background: ${themeGet('colors.white')};
    color: ${themeGet('colors.black')};
  }
`

import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
type dropdiwnprops = {
  hide: boolean
}

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
export const DropdownLabel = styled.span`
  color: ${themeGet('colors.white')};
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  &:hover {
    border: 1px solid ${themeGet('colors.white')};
  }
`

export const DropdownWrapper = styled.div`
  position: relative;
`

export const DropdownItems = styled.div<dropdiwnprops>`
  display: ${({ hide }) => (hide ? 'block' : 'none')};
  position: absolute;
  padding: 10px;
  right: -10px;
  top: 38px;
  width: 200px;
  background-color: ${themeGet('colors.green')};
  border-radius: 0.4rem;
  box-shadow: 0px 0 10px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.2);
`
export const DropdownItem = styled.div`
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  cursor: pointer;
  color: ${themeGet('colors.white')};
  &:hover {
    color: ${themeGet('colors.black')};
    background-color: ${themeGet('colors.white')};
  }
`

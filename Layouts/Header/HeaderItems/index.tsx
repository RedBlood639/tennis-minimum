import React from 'react'
import { ItemgroupWrapper, SignInButton, SignUpButton } from './index.style'
const HeaderItems: React.FC<{}> = () => {
  const toSignin = () => {}
  const toSignup = () => {}
  return (
    <ItemgroupWrapper>
      <SignInButton>{'Sign In'}</SignInButton>
      <SignUpButton>{'Sign Up'}</SignUpButton>
    </ItemgroupWrapper>
  )
}

export default HeaderItems

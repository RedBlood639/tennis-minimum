import React from 'react'
import { useRouter } from 'next/router'
import { ItemgroupWrapper, SignInButton, SignUpButton } from './index.style'
const HeaderItems: React.FC<{}> = () => {
  const router = useRouter()
  const toChangePath = (href: string) => {
    router.push(href)
  }
  return (
    <ItemgroupWrapper>
      <SignInButton onClick={() => toChangePath('/contact')}>
        {'Contact'}
      </SignInButton>
      <SignInButton onClick={() => toChangePath('/signin')}>
        {'Sign In'}
      </SignInButton>
      <SignUpButton onClick={() => toChangePath('/signup')}>
        {'Sign Up'}
      </SignUpButton>
    </ItemgroupWrapper>
  )
}

export default HeaderItems

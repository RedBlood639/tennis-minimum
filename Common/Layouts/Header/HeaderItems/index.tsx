import React, { useContext, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  ItemgroupWrapper,
  SignInButton,
  SignUpButton,
  DropdownItem,
  DropdownLabel,
  DropdownItems,
  DropdownWrapper,
} from './index.style'

const HeaderItems: React.FC<{}> = () => {
  const router = useRouter()
  const dropMenuRef = useRef(null)
  const [hide, setHide] = useState<boolean>(false)
  const [login, setLogin] = useState<boolean>(false)

  useEffect(() => {
    setLogin(
      localStorage.getItem('tennis-common-token') === null ? false : true,
    )
  })
  const toChangePath = (href: string) => {
    router.push(href)
  }
  useEffect(() => {
    if (hide) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [hide])

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return
    }
    setHide(false)
  }

  const onSignout = () => {
    toChangePath('/')
    localStorage.removeItem('tennis-common-token')
    localStorage.removeItem('tennis-common-email')
  }
  return (
    <ItemgroupWrapper>
      {login ? (
        <>
          <SignInButton onClick={() => toChangePath('/members')}>
            {'All Members'}
          </SignInButton>
          <SignInButton onClick={() => toChangePath('/league')}>
            {'League'}
          </SignInButton>
          <SignInButton onClick={() => toChangePath('/match')}>
            {'Match and Result'}
          </SignInButton>
          <SignInButton onClick={() => toChangePath('/lineup')}>
            {'Weekly lineup'}
          </SignInButton>
        </>
      ) : (
        ''
      )}
      <SignInButton onClick={() => toChangePath('/contact')}>
        {'Contact'}
      </SignInButton>
      {!login ? (
        <>
          <SignInButton onClick={() => toChangePath('/signin')}>
            {'Sign In'}
          </SignInButton>
          <SignUpButton onClick={() => toChangePath('/signup')}>
            {'Sign Up'}
          </SignUpButton>
        </>
      ) : (
        <DropdownWrapper>
          <DropdownLabel onClick={() => setHide(!hide)}>
            {'Profile'}
          </DropdownLabel>
          <DropdownItems ref={dropMenuRef} hide={hide}>
            <DropdownItem
              onClick={() => {
                setHide(false)
                toChangePath('/profile')
              }}
            >
              {'My Profile'}
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                setHide(false)
                toChangePath('/account')
              }}
            >
              {'My Account'}
            </DropdownItem>
            <DropdownItem onClick={onSignout}>{'Sign Out'}</DropdownItem>
          </DropdownItems>
        </DropdownWrapper>
      )}
    </ItemgroupWrapper>
  )
}

export default HeaderItems

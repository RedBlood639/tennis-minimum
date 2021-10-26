import React, { useState, useContext } from 'react'
import {
  SignInWrapper,
  SignInButton,
  SignInHeaderLabel,
  SignInLabel,
} from './index.style'
import { FormProps } from '../formsection/type'
import FormSection from '../formsection'
import Link from 'next/link'
import { AuthContext } from '../../contexts/Auth/auth.context'
const SignIn: React.FC<{}> = () => {
  const { loadDispatch } = useContext<any>(AuthContext)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const data: FormProps[] = [
    {
      label: 'Email',
      placeholder: 'Email Address',
      value: email,
      setState: setEmail,
      type: 'text',
    },
    {
      label: 'Password',
      placeholder: 'Password',
      value: password,
      type: 'password',
      setState: setPassword,
    },
  ]

  const getState = () => {
    loadDispatch({ type: true })
    console.log(email, password)
  }
  return (
    <SignInWrapper>
      <SignInHeaderLabel>{'Please Sign In.'}</SignInHeaderLabel>
      {data.map((item: FormProps, index: number) => {
        return (
          <FormSection
            key={index}
            type={item.type}
            value={item.value}
            label={item.label}
            placeholder={item.placeholder}
            setState={item.setState}
          />
        )
      })}

      <SignInButton onClick={() => getState()}>{'Sign In'}</SignInButton>

      <SignInLabel>
        Forgot your password?{' '}
        <Link href="/forgot">
          <a>Reset</a>
        </Link>
      </SignInLabel>
    </SignInWrapper>
  )
}

export default SignIn

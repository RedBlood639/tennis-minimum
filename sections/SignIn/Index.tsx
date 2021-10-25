import React from 'react'
import { SignInWrapper, SignInButton, SignInHeaderLabel } from './index.style'
import { FormProps } from '../formsection/type'
import FormSection from '../formsection'
const data: FormProps[] = [
  {
    label: 'Email',
    placeholder: 'Email Address',
  },
  {
    label: 'Password',
    placeholder: 'Password',
  },
]

const SignIn: React.FC<{}> = () => {
  return (
    <SignInWrapper>
      <SignInHeaderLabel>{'Please Sign In.'}</SignInHeaderLabel>
      {data.map((item: FormProps, index: number) => {
        return (
          <FormSection
            key={index}
            label={item.label}
            placeholder={item.placeholder}
          />
        )
      })}

      <SignInButton>{'Register'}</SignInButton>
    </SignInWrapper>
  )
}

export default SignIn

import React from 'react'
import { SignUpWrapper, SignUpHeaderLabel, SignUpButton } from './index.style'
import FormSection from '../formsection'
import { FormProps } from '../formsection/type'
const data: FormProps[] = [
  {
    label: 'Email',
    placeholder: 'Email Address',
  },
  {
    label: 'First Name',
    placeholder: 'First Name',
  },
  {
    label: 'Last Name',
    placeholder: 'Last Name',
  },
  {
    label: 'Password',
    placeholder: 'Password',
  },
  {
    label: 'Confirm Password',
    placeholder: 'Password',
  },
]
const SignIn: React.FC<{}> = () => {
  return (
    <SignUpWrapper>
      <SignUpHeaderLabel>{'Create a new account.'}</SignUpHeaderLabel>
      {data.map((item: FormProps, index: number) => {
        return (
          <FormSection
            key={index}
            label={item.label}
            placeholder={item.placeholder}
          />
        )
      })}

      <SignUpButton>{'Register'}</SignUpButton>
    </SignUpWrapper>
  )
}

export default SignIn

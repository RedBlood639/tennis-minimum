import React, { useState } from 'react'
import { SignUpWrapper, SignUpHeaderLabel, SignUpButton } from './index.style'
import FormSection from '../formsection'
import { FormProps } from '../formsection/type'
const SignIn: React.FC<{}> = () => {
  const [email, setEmail] = useState<string>('')
  const [firstname, setFirstName] = useState<string>('')
  const [lastname, setLastName] = useState<string>('')
  const [password1, setPassword1] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
  const data: FormProps[] = [
    {
      label: 'Email',
      placeholder: 'Email Address',
      value: email,
      setState: setEmail,
      type: 'text',
    },
    {
      label: 'First Name',
      placeholder: 'First Name',
      value: firstname,
      setState: setFirstName,
      type: 'text',
    },
    {
      label: 'Last Name',
      placeholder: 'Last Name',
      value: lastname,
      setState: setLastName,
      type: 'text',
    },
    {
      label: 'Password',
      placeholder: 'Password',
      value: password1,
      setState: setPassword1,
      type: 'password',
    },
    {
      label: 'Confirm Password',
      placeholder: 'password2',
      value: password2,
      setState: setPassword2,
      type: 'password',
    },
  ]
  return (
    <SignUpWrapper>
      <SignUpHeaderLabel>{'Create a new account.'}</SignUpHeaderLabel>
      {data.map((item: FormProps, index: number) => {
        return (
          <FormSection
            key={index}
            type={item.type}
            label={item.label}
            placeholder={item.placeholder}
            value={item.value}
            setState={item.setState}
          />
        )
      })}

      <SignUpButton>{'Register'}</SignUpButton>
    </SignUpWrapper>
  )
}

export default SignIn

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
import { apiClientwithToken } from '../../utils/apiclient'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { isEmpty } from '../../utils/isEmpty'
import { validateEmail } from '../../utils/validateemail'

const SignIn: React.FC<{}> = () => {
  const router = useRouter()
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

  const onSave = () => {
    if (isEmpty(email)) {
      return toast.error('Please input the email.')
    }
    if (!validateEmail(email)) {
      return toast.error('Please input correct email.')
    }
    if (isEmpty(password)) {
      return toast.error('Please input the password.')
    }
    apiClientwithToken(localStorage.getItem('tennis-common-token'))
      .post('/users/siginin', {
        email,
        password,
      })
      .then(
        (response) => {
          if (response.data.success) {
            localStorage.setItem('tennis-common-token', response.data.token)
            localStorage.setItem('tennis-common-email', response.data.email)
            toast.info(response.data.message)
            router.push('/panel')
          }
        },
        (error) => {
          if (error.response.status == 404) {
            toast.error('Server Disconected.')
          } else {
            toast.error(error.response.data.message)
          }
        },
      )
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

      <SignInButton onClick={() => onSave()}>{'Sign In'}</SignInButton>

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

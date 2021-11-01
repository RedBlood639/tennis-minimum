import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { SignUpWrapper, SignUpHeaderLabel, SignUpButton } from './index.style'
import FormSection from '../formsection'
import { FormProps } from '../formsection/type'
import { apiClientwithToken } from '../../utils/apiclient'
import { toast } from 'react-toastify'
import { isEmpty } from '../../utils/isEmpty'

const SignIn: React.FC<{}> = () => {
  const router = useRouter()
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

  const onSignUp = () => {
    if (isEmpty(email)) {
      return toast.error('Please input Email.')
    }
    if (isEmpty(firstname)) {
      return toast.error('Please input FirstName.')
    }
    if (isEmpty(lastname)) {
      return toast.error('Please input LastName.')
    }
    if (isEmpty(password1)) {
      return toast.error('Please input Password.')
    }
    // if (password1.trim().length < 8) {
    //   return toast.error('Password should more 8 charaters.')
    // }
    if (password1.trim() !== password2.trim()) {
      return toast.error("Password didn't matched.")
    }

    apiClientwithToken(localStorage.getItem('tennis'))
      .post('/users/signup', {
        email,
        firstname,
        lastname,
        password1,
        role: 'common',
      })
      .then(
        (response) => {
          if (response.data.success) {
            localStorage.setItem('tennis', response.data.token)
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

      <SignUpButton onClick={onSignUp}>{'Register'}</SignUpButton>
    </SignUpWrapper>
  )
}

export default SignIn

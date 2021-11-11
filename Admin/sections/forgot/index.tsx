import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { ForgotWrapper, ForgotButton, ForgotHeaderLabel } from './index.style'
import { FormProps } from '../formsection/type'
import FormSection from '../formsection'
import { SentMessageContext } from '../../contexts/MessageSent/sentmessage.context'
import { apiClientwithToken } from '../../utils/apiclient'
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils/validateemail'
import { isEmpty } from '../../utils/isEmpty'
const Forgot: React.FC<{}> = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const { loadDispatch } = useContext<any>(SentMessageContext)

  const data: FormProps[] = [
    {
      label: 'Email',
      placeholder: 'Email Address',
      value: email,
      setState: setEmail,
      type: 'text',
    },
  ]

  const sentMessage = () => {
    if (isEmpty(email)) {
      return toast.error('Please input email.')
    }

    if (!validateEmail(email)) {
      return toast.error('Please input correct email.')
    }

    apiClientwithToken(localStorage.getItem('tennis-admin-token'))
      .post('/users/forgot', { email })
      .then((res) => {
        if (res.data.success) {
          loadDispatch({ type: 'forgot' })
          router.push('/sent')
        }
      })
      .catch((err) => {
        if (err.response.status == 404) {
          toast.error('Server Disconected.')
        } else {
          toast.error(err.response.data.message)
        }
      })
  }

  return (
    <ForgotWrapper>
      <ForgotHeaderLabel>{'Forgot your password?'}</ForgotHeaderLabel>
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
      <ForgotButton onClick={() => sentMessage()}>
        {'Reset Password'}
      </ForgotButton>
    </ForgotWrapper>
  )
}

export default Forgot

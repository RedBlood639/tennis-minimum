import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { ForgotWrapper, ForgotButton, ForgotHeaderLabel } from './index.style'
import { FormProps } from '../formsection/type'
import FormSection from '../formsection'
import { SentMessageContext } from '../../contexts/MessageSent/sentmessage.context'
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
    loadDispatch({ type: 'forgot' })
    router.push('/sent')
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

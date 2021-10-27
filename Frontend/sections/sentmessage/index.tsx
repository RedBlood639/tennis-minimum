import React, { useContext } from 'react'
import { SentWrapper, SentLabel, SentSubLabel } from './index.style'
import { SentMessageContext } from '../../contexts/MessageSent/sentmessage.context'

const SentMessage: React.FC<{}> = () => {
  const {
    loadState: { kind },
  } = useContext<any>(SentMessageContext)
  return (
    <SentWrapper>
      <SentLabel>{kind}</SentLabel>
      <SentSubLabel>
        {'Please check your email to reset your password.'}
      </SentSubLabel>
    </SentWrapper>
  )
}

export default SentMessage

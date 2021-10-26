import React, { useReducer } from 'react'
import { SentMessageContext } from './sentmessage.context'
const INITIAL_STATE = {
  kind: 'Forgot password confirmation',
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'forgot':
      return {
        kind: 'Forgot password confirmation',
      }
    default:
      return state
  }
}

export const SentMessageProvider: React.FunctionComponent = ({ children }) => {
  const [loadState, loadDispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <SentMessageContext.Provider value={{ loadState, loadDispatch }}>
      {children}
    </SentMessageContext.Provider>
  )
}

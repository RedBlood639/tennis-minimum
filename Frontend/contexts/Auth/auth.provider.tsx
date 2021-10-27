import React, { useReducer } from 'react'
import { AuthContext } from './auth.context'
const INITIAL_STATE = {
  login: false,
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case false:
      return {
        login: false,
      }
    case true:
      return {
        login: true,
      }
    default:
      return state
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const [loadState, loadDispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <AuthContext.Provider value={{ loadState, loadDispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

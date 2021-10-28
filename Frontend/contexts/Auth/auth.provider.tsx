import React, { useReducer } from 'react'
import { AuthContext } from './auth.context'
const INITIAL_STATE = {
  login: false,
  c_email: '',
  token: null,
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case false:
      localStorage.removeItem('tennis')
      return {
        login: false,
        c_email: null,
        token: null,
      }
    case true:
      localStorage.setItem('tennis', action.token)
      return {
        login: true,
        c_email: action.email,
        token: action.token,
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

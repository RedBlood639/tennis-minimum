import React, { useReducer } from 'react'
import { PageLoaderContext } from './pageloader.context'
const INITIAL_STATE = {
  loading: false,
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'loading':
      return {
        loading: true,
      }
    case 'finished':
      return {
        loading: false,
      }
    default:
      return state
  }
}

export const PageProvider: React.FunctionComponent = ({ children }) => {
  const [loadState, loadDispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <PageLoaderContext.Provider value={{ loadState, loadDispatch }}>
      {children}
    </PageLoaderContext.Provider>
  )
}

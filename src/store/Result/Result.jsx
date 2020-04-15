import React, { createContext } from 'react'
import { useResult } from './useResult'

const Context = createContext([])
const ActionsContext = createContext({})

const Provider = ({
  children
}) => {
  const {
    actions, value
  } = useResult()

  return (
    <Context.Provider value={value}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </Context.Provider>
  )
}

export {
  Context, ActionsContext, Provider
}

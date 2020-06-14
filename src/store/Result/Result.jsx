import React, { createContext } from 'react'
import { useResult } from './useResult'

const Context = createContext({})
const ActionsContext = createContext({})

const Provider = ({
  children
}) => {
  const {
    actions, result
  } = useResult()

  return (
    <Context.Provider value={result}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </Context.Provider>
  )
}

export {
  Context, ActionsContext, Provider
}

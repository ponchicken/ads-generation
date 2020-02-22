import React, { createContext } from 'react'
import { useCombinations } from './useCombinations'

const Context = createContext([])
const ActionsContext = createContext({})

const Provider = ({
  children
}) => {
  const {
    actions, value
  } = useCombinations()

  return (
    <Context.Provider value={value}>
      <ActionsContext.Provider value={actions}>
        { children }
      </ActionsContext.Provider>
    </Context.Provider>
  )
}

export {
  Context, ActionsContext, Provider
}

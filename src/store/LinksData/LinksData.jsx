import React, { createContext } from 'react'
import { useLinksData } from './useLinksData'

const Context = createContext([])
const ActionsContext = createContext({})

const Provider = ({
  children
}) => {
  const {
    actions, value
  } = useLinksData()

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

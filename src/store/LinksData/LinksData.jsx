import React, { createContext, useMemo } from 'react'
import { useLinksData } from './useLinksData'
import { useLoadImages } from './useLoadImages'

const Context = createContext([])
const ActionsContext = createContext({})

const Provider = ({
  children
}) => {
  const {
    actions, value
  } = useLinksData()

  const loadImagesActions = useLoadImages(value.linksData)

  const mergedActions = useMemo(() => ({
    ...actions,
    ...loadImagesActions
  }), [actions, loadImagesActions])

  return (
    <Context.Provider value={value}>
      <ActionsContext.Provider value={mergedActions}>
        { children }
      </ActionsContext.Provider>
    </Context.Provider>
  )
}

export {
  Context, ActionsContext, Provider
}

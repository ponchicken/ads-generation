import React, { createContext, useMemo } from 'react'
import { useLinksData } from './useLinksData'
import { useLoadImages } from './useLoadImages'

const Context = createContext({})
const WasChanged = createContext(false)
const ActionsContext = createContext({})

const Provider = ({
  children
}) => {
  const {
    actions, value, wasChanged
  } = useLinksData()

  const loadImagesActions = useLoadImages(value.linksData)

  const mergedActions = useMemo(() => ({
    ...actions,
    ...loadImagesActions
  }), [actions, loadImagesActions])

  return (
    <Context.Provider value={value}>
      <WasChanged.Provider value={wasChanged}>
        <ActionsContext.Provider value={mergedActions}>
          { children }
        </ActionsContext.Provider>
      </WasChanged.Provider>
    </Context.Provider>
  )
}

export {
  Context, WasChanged, ActionsContext, Provider
}

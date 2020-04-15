import React, { createContext } from 'react'
import { useBanners } from './useBanners'

const BannersContext = createContext([])
const ActionsContext = createContext({})

const Provider = ({
  children
}) => {
  const {
    actions, banners
  } = useBanners()

  return (
    <BannersContext.Provider value={banners}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </BannersContext.Provider>
  )
}

export {
  BannersContext, ActionsContext, Provider
}

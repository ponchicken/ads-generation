import React, { useContext } from 'react'
import { Wrapper } from './styled'
import { Banners, Combinations } from 'store'

export const ResultsActions = () => {
  const banners = useContext(Banners.BannersContext)
  const { combinations } = useContext(Combinations.Context)

  const allLoaded = combinations.length > 0 &&
    Object.keys(banners).length === combinations.length

  return (
    <Wrapper>
      <button
        disabled={!allLoaded}
      >
        Скачать все архивом
      </button>
    </Wrapper>
  )
}

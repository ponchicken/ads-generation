import React, { useContext, useState } from 'react'
import { Wrapper } from './styled'
import { Banners, Combinations, Result } from 'store'
import { useDownload } from './useDownload'

export const ResultsActions = () => {
  const [isLoading, setLoading] = useState(false)
  const result = useContext(Result.Context)
  const banners = useContext(Banners.BannersContext)
  const { combinations } = useContext(Combinations.Context)
  const download = useDownload({ setLoading })

  const allLoaded = combinations.length > 0 &&
    Object.keys(banners).length === combinations.length

  return (
    <Wrapper>
      <button
        onClick={() => download({ creatives: result })}
        disabled={!allLoaded}
      >
        {isLoading
          ? 'Собираем архив...'
          : 'Скачать все архивом'
        }
      </button>
    </Wrapper>
  )
}

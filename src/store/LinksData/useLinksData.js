import { useState, useMemo } from 'react'

export const useLinksData = () => {
  const [linksData, setLinksData] = useState([])

  const actions = useMemo(() => ({
    setLinksData
  }), [setLinksData])

  const value = useMemo(() => ({
    linksData
  }), [linksData])

  return {
    actions, value
  }
}

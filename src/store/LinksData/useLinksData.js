import { useState, useMemo, useCallback } from 'react'

export const useLinksData = () => {
  const [linksData, setLinksData] = useState([])

  const setLinksDataFieldItem = useCallback(({
    input, field, i, j
  }) => {
    setLinksData(data => {
      data[i][field][j] = input
      return [...data]
    })
  }, [])

  const removeLinksFieldItem = useCallback(({
    field, i, j
  }) => {
    setLinksData(data => {
      data[i][field].splice(j, 1)
      return [...data]
    })
  }, [])

  const actions = useMemo(() => ({
    setLinksData, setLinksDataFieldItem, removeLinksFieldItem
  }), [setLinksData, setLinksDataFieldItem, removeLinksFieldItem])

  const value = useMemo(() => ({
    linksData
  }), [linksData])

  return {
    actions, value
  }
}

import { useState, useMemo, useCallback } from 'react'

export const useLinksData = () => {
  const [linksData, setLinksDataState] = useState({})
  const [wasChanged, setWasChanged] = useState(false)

  const setLinksData = useCallback((data) => {
    setLinksDataState(data)
  }, [setLinksDataState])

  const setLinksDataFieldItem = useCallback(({
    input, field, i
  }) => {
    setLinksDataState(data => {
      const newData = Object.assign({}, data)
      newData[field][i] = input
      return newData
    })
  }, [setLinksDataState])

  const removeLinksFieldItem = useCallback(({
    field, i
  }) => {
    setLinksData(data => {
      if (data[field].length > 1) {
        const newData = Object.assign({}, data)
        newData[field].splice(i, 1)
        setWasChanged(true)
        return newData
      }
      return data
    })
  }, [setLinksData, setWasChanged])

  const actions = useMemo(() => ({
    setLinksData, setLinksDataFieldItem, removeLinksFieldItem, setWasChanged
  }), [setLinksData, setLinksDataFieldItem, removeLinksFieldItem, setWasChanged])

  const value = useMemo(() => ({
    linksData
  }), [linksData])

  return {
    actions, value, wasChanged
  }
}

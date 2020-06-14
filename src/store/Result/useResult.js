import { useContext, useState, useMemo, useCallback, useEffect } from 'react'
import { Combinations } from 'store'

export const useResult = () => {
  const { combinations } = useContext(Combinations.Context)
  const [result, setResult] = useState({})

  useEffect(() => {
    if (combinations.length) {
      setResult({})
    }
  }, [combinations, setResult])

  const changeResultItem = useCallback(({
    data, id
  }) => {
    setResult(prev => {
      const result = Object.assign({}, prev)
      result[id] = {
        ...result[id],
        ...data
      }
      return result
    })
  }, [setResult])

  const removeResultItem = useCallback(({ id }) => () => {
    changeResultItem({
      data: {
        removed: true
      },
      id
    })
  }, [changeResultItem])

  const actions = useMemo(() => ({
    changeResultItem, removeResultItem
  }), [changeResultItem, removeResultItem])

  return {
    actions,
    result
  }
}

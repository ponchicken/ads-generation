import { useState, useMemo, useCallback } from 'react'
import { templates } from 'data/templates'
import { getCartesianIndexes } from './helpers'
import { normalizeLinksData } from './normalize'

export const useCombinations = () => {
  const [combinations, setCombinations] = useState([])

  const calcCombinations = useCallback((linksData) => {
    const normalized = normalizeLinksData(linksData)
    const combinations = getCartesianIndexes(normalized)

    if (combinations.length) {
      setCombinations(combinations.sort((a, b) => {
        return templates[a.template] > templates[b.template]
          ? 1
          : templates[a.template] < templates[b.template]
            ? -1
            : 0
      })
      )
    }
  }, [setCombinations])

  const removeItem = useCallback((index) => {
    setCombinations(prev => {
      return prev.filter((item, i) => i !== index)
    })
  }, [setCombinations])

  const actions = useMemo(() => ({
    calcCombinations, removeItem
  }), [calcCombinations, removeItem])

  const value = useMemo(() => ({
    combinations
  }), [combinations])

  return {
    actions, value
  }
}

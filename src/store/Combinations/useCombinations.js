import { useState, useMemo, useCallback } from 'react'
import { templates } from 'data/templates'
import { getCartesian } from './helpers'
import { normalizeLinksData } from './normalize'

export const useCombinations = () => {
  const [combinations, setCombinations] = useState([])

  const calcCombinations = useCallback((linksData) => {
    const combinations = linksData.map(linkData => {
      const normalized = normalizeLinksData({ ...linkData, templates })
      return getCartesian(normalized)
    })
    setCombinations(...combinations)
  }, [setCombinations])

  const actions = useMemo(() => ({
    calcCombinations
  }), [calcCombinations])

  const value = useMemo(() => ({
    combinations
  }), [combinations])

  return {
    actions, value
  }
}

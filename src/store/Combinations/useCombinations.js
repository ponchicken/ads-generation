import { useState, useMemo, useCallback } from 'react'
import { templates } from 'data/templates'

export const useCombinations = () => {
  const [combinations, setCombinations] = useState([])

  const calcCombinations = useCallback((linksData) => {
    console.log(linksData)
    setCombinations(templates)
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

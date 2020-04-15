import { useContext, useState, useMemo, useCallback, useEffect } from 'react'
import { Combinations, LinksData } from 'store'

export const useBanners = () => {
  const { combinations } = useContext(Combinations.Context)
  const { linksData } = useContext(LinksData.Context)
  const [banners, setBanners] = useState([])

  useEffect(() => {
    setBanners(function someSetBanners (prev) {
      return combinations.map(combination => ({
        image: linksData.images[combination.image],
        title: linksData.titles[combination.title],
        text: linksData.texts[combination.text],
        template: linksData.templates[combination.template],
        ...prev
      }))
    })
  }, [combinations, setBanners, linksData])

  const changeBanner = useCallback(({
    data, id
  }) => {
    setBanners(prev => {
      const newArray = prev.slice()
      newArray[id] = {
        ...newArray[id],
        ...data
      }
      return newArray
    })
  }, [setBanners])

  const removeBanner = useCallback((index) => {
    setBanners(prev => {
      const newState = Object.assign({}, prev)
      newState[index].removed = true
      return newState
    })
  }, [setBanners])

  const actions = useMemo(() => ({
    changeBanner, removeBanner
  }), [changeBanner, removeBanner])

  return {
    actions,
    banners
  }
}

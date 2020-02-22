import React, { useContext, useEffect } from 'react'
import { LinksData, Combinations } from 'store'
import './style.css'

const block = 'Showtime'

export const Showtime = () => {
  const { linksData } = useContext(LinksData.Context)
  const { calcCombinations } = useContext(Combinations.ActionsContext)
  // console.log(linksData)

  useEffect(() => {
    calcCombinations(linksData)
  }, [calcCombinations, linksData])

  if (!linksData) return null

  return (
    <div className={`${block}`}>
      { linksData.map((linkData, i) => (
        <div className={`${block}-item`} key={i}>
          <div className={`${block}-row`}>
            { linkData.titles.map((title, i) => (
              <div key={i}>{ title }</div>
            )) }
          </div>
          <div className={`${block}-row`}>
            { linkData.texts.map((text, i) => (
              <strong key={i}>{ text }</strong>
            )) }
          </div>
          <div className={`${block}-row`}>
            { linkData.images.map((image, i) => (
              <div key={i}>{ image.src }</div>
            )) }
          </div>
        </div>
      ))}
    </div>
  )
}

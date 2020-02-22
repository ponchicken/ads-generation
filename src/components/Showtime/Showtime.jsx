import React, { useContext } from 'react'
import { LinksData } from 'store'
import './style.css'

const block = 'Showtime'

export const Showtime = () => {
  const { linksData } = useContext(LinksData.Context)
  console.log(linksData)
  return (
    <div className={`${block}`}>
      { linksData.map((linkData, i) => (
        <div key={i}>
          { linkData.titles[0] }
        </div>
      ))}
    </div>
  )
}

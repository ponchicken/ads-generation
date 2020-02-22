import React, { useContext } from 'react'
import { Combinations } from 'store'
import './style.css'

const block = 'Showtime'

export const Showtime = () => {
  const { combinations } = useContext(Combinations.Context)

  if (!combinations) return null

  return (
    <div className={`${block}`}>
      { combinations.map((item, i) => (
        <div className={`${block}-item`} key={i}>
          <div>
            { item.title }
          </div>
          <div>
            { item.text }
          </div>
          { item.image && (
            <div>
              <img src={ item.image.src } width={100} height={50} />
            </div>
          )}
          <div>
            { item.template.key } { item.template.width }x{ item.template.height }
          </div>
        </div>
      ))}
    </div>
  )
}

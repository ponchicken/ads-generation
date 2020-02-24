import React, { useContext } from 'react'
import { Combinations } from 'store'
import './style.css'
import { CanvasImage } from 'components'

const block = 'Showtime'

export const Showtime = () => {
  const { combinations } = useContext(Combinations.Context)

  if (!combinations) return null

  return (
    <div className={`${block}`}>
      { combinations.map(({
        template, image, text, title
      }, i) => (
        <div className={`${block}-item`} key={i}>
          <CanvasImage
            {...{
              text: title,
              template,
              background: image.src
            }}
          />
        </div>
      ))}
    </div>
  )
}

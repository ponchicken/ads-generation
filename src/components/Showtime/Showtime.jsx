import React, { useContext } from 'react'
import { Combinations } from 'store'
import './style.css'
import { Canvas } from 'components'

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
          <Canvas
            {...{
              texts: [text, title],
              template,
              background: image.src
            }}
          />
        </div>
      ))}
    </div>
  )
}

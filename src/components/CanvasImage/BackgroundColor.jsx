import React from 'react'
import { Rect } from 'react-konva'

export const BackgroundColor = ({
  width,
  height,
  color
}) => {
  return (
    <Rect {...{
      width,
      height,
      fill: color
    }}/>
  )
}

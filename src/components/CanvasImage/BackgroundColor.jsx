import React, { useEffect } from 'react'
import { Rect } from 'react-konva'
import { colorToRgba } from './helpers'

const BackgroundColor = ({
  onReady,
  width,
  height,
  color
}) => {
  useEffect(() => {
    onReady()
  }, [])

  if (!color.hex) return null

  return (
    <Rect {...{
      width,
      height,
      fill: colorToRgba(color)
    }}/>
  )
}

export default BackgroundColor

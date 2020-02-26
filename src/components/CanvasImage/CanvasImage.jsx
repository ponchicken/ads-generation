import React, { useEffect, useState, useRef } from 'react'
import {
  Stage,
  Layer,
  Text
} from 'react-konva'
import { BackgroundImage } from './BackgroundImage'
import { BackgroundColor } from './BackgroundColor'
import { useCalcTextParams } from './useCalcTextParams'
import { colorToRgba } from './helpers'

const CanvasImage = ({
  text = '',
  template,
  background,
  previewWidth = 300,
  textColor,
  fontFamily = 'Arial'
}) => {
  const stageRef = useRef(null)
  const textRef = useRef(null)

  const [scale, setScale] = useState(0)
  const [size, setSize] = useState({ width: 0, height: 0 })

  const textParams = useCalcTextParams({
    textRef,
    text,
    width: template.text.width,
    height: template.text.height,
    fontSize: template.text.fontSize.from,
    fontFamily,
    textBox: template.text
  })

  useEffect(() => {
    const calcScale = previewWidth / (template.width || 1)
    setScale(calcScale)
    setSize({
      width: calcScale * template.width,
      height: calcScale * template.height
    })
  }, [setScale, previewWidth, template, setSize])

  return (
    <>
      <Stage
        width={size.width}
        height={size.height}
        ref={stageRef}
        scale={{
          x: scale,
          y: scale
        }}
        style={{ background: 'red' }}
      >
        <Layer>
          <BackgroundColor
            width={template.width}
            height={template.height}
            color="#fa9"
          />
          <BackgroundImage
            url={background}
            x={template.width - template.image.width}
            y={template.height - template.image.height}
            width={template.width}
            height={template.image.height}
          />
          <Text
            ref={textRef}
            text={text}
            fontSize={textParams.fontSize}
            fontFamily={fontFamily}
            lineHeight={1.2}
            y={textParams.y}
            width={template.text.width}
            align={template.text.align}
            fill={textColor ? colorToRgba(textColor) : '#000'}
            padding={template.text.padding}
          />
        </Layer>
      </Stage>
    </>
  )
}

export default CanvasImage

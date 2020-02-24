import React, { useEffect, useState, useRef, useMemo } from 'react'
import Konva from 'konva'
import {
  Stage,
  Layer,
  Text,
  Label,
  Tag
} from 'react-konva'
import BackgroundImage from './BackgroundImage'
import { useCalcLabelParams } from './useCalcLabelParams'
import { colorToRgba } from './helpers'

const CanvasImage = ({
  text = '',
  template,
  background,
  previewWidth = 300,
  substrateColor,
  textColor,
  textAlign = 'left',
  textPosition = 'top',
  fontSize = 40,
  fontFamily = 'Arial'
}) => {
  const stageRef = useRef(null)
  const tagRef = useRef(null)
  const textRef = useRef(null)

  const [scale, setScale] = useState(0)
  const [size, setSize] = useState({ width: 0, height: 0 })

  var textObj = useMemo(() => new Konva.Text({
    x: 40,
    y: 0,
    text,
    fontSize,
    fontFamily,
    padding: 40
  }), [text, fontSize, fontFamily])

  const labelParams = useCalcLabelParams({
    textObj,
    text,
    textRef,
    tagRef,
    width: template.text.width,
    height: template.text.height,
    fontSize: template.text.fontSize,
    fontFamily,
    textAlign,
    textPosition
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
          <BackgroundImage
            url={background}
            x={template.width - template.image.width}
            y={template.height - template.image.height}
            width={template.width}
            height={template.image.height}
          />
          <Label
            x={labelParams.x}
            y={labelParams.y}
            offsetY={labelParams.offsetY}
            visible={labelParams.offsetY !== null && !!labelParams.text.length}
          >
            <Tag
              ref={tagRef}
              width={labelParams.width}
              height={200}
              fill={ substrateColor && !substrateColor.disabled
                ? colorToRgba(substrateColor)
                : 'rgba(0,0,0,0.5)'
              }
            />
            <Text
              ref={textRef}
              text={labelParams.text}
              fontSize={template.text.fontSize}
              fontFamily={fontFamily}
              lineHeight={1.2}
              width={labelParams.width}
              align={textAlign}
              fill={textColor ? colorToRgba(textColor) : '#fff'}
              padding={40}
            />
          </Label>
        </Layer>
      </Stage>
    </>
  )
}

export default CanvasImage

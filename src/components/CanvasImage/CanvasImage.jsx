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
import BackgroundColor from './BackgroundColor'
import { useCalcLabelParams } from './useCalcLabelParams'
import { colorToRgba, downloadFromUrl } from './helpers'

const CanvasImage = ({
  render,
  onReady = () => {},
  width,
  height,
  text = '',
  previewWidth = 200,
  substrateColor,
  textColor,
  textAlign = 'left',
  textPosition = 'top',
  fontSize = 40,
  fontFamily = 'Arial',
  background,
  formatCategory = ''
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
    width,
    height,
    fontSize,
    fontFamily,
    textAlign,
    textPosition
  })

  const [textReady, setTextReady] = useState(false)
  const [imageReady, setImageReady] = useState(false)

  const isReady = textReady && imageReady

  useEffect(() => {
    const calcScale = previewWidth / (width || 1)
    setScale(calcScale)
    setSize({
      width: calcScale * width,
      height: calcScale * height
    })
  }, [setScale, previewWidth, width, height, setSize])

  useEffect(() => {
    if (tagRef.current) {
      setTextReady(true)
    }
  }, [tagRef, setTextReady])

  useEffect(() => {
    if (isReady) {
      onReady({
        scale,
        canvas: stageRef.current
      })
    }
  }, [isReady, onReady, scale])

  const onDownload = (index = 0) => () => {
    const url = stageRef.current.toDataURL({
      pixelRatio: 1 / scale
    })

    downloadFromUrl({
      url,
      filename: `${formatCategory}_${width}_${height}_${index}`
    })
  }

  return (
    <>
      { isReady && render && render({ onDownload })}

      <Stage
        width={size.width}
        height={size.height}
        ref={stageRef}
        scale={{
          x: scale,
          y: scale
        }}
        visible={isReady}
      >
        <Layer>
          <BackgroundColor
            onReady={() => setImageReady(true)}
            width={width}
            height={height}
            color={background}
          />
          <BackgroundImage
            onReady={() => setImageReady(true)}
            url={background}
            width={width}
            height={height}
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
              fontSize={fontSize}
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

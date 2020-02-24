import { useState, useEffect, useCallback } from 'react'

const initialLabelParams = {
  text: '',
  width: undefined,
  textWidth: undefined,
  x: 0,
  y: 0,
  offsetY: 0
}

const useCalcLabelParams = ({
  textObj, textRef, tagRef, width, height, textPosition, textAlign, fontSize
}) => {
  const [labelParams, setLabelParams] = useState(initialLabelParams)

  const calcVerticalTextPosition = useCallback(() => {
    const margin = 0
    const doubleMargin = margin * 2
    const textWidth = textObj.getTextWidth() + doubleMargin
    const maxWidth = width - doubleMargin
    const labelWidth = textWidth > maxWidth ? maxWidth : textWidth

    const params = {
      width: labelWidth,
      text: textObj.text(),
      x: margin
    }

    const tagHeight = 80 + textObj.textArr.reduce((sum, item) => {
      const some = item.width + doubleMargin
      return sum + (some > maxWidth ? Math.ceil(some / maxWidth) : 1)
    }, 0) *
    fontSize *
    textRef.current.attrs.lineHeight

    switch (textPosition) {
      case 'center':
        params.y = height / 2
        params.offsetY = tagHeight / 2
        break
      case 'top':
        params.y = height * 0.10
        params.offsetY = 0
        break
      case 'bottom':
      default:
        params.y = height * 0.90
        params.offsetY = tagHeight
        break
    }

    switch (textAlign) {
      case 'left':
        params.x = margin
        break
      case 'right':
        params.x = width - labelWidth - margin
        break
      case 'center':
      default:
        params.x = (width - labelWidth) / 2
    }

    setLabelParams(prev => {
      return {
        ...prev,
        ...params
      }
    })
  }, [height, width, textAlign, textPosition, fontSize, textRef, textObj])

  // vertical positioning text with its background
  useEffect(() => {
    if (tagRef.current) {
      calcVerticalTextPosition()
    }
  }, [tagRef, calcVerticalTextPosition])

  return labelParams
}

export {
  useCalcLabelParams
}

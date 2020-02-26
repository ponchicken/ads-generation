// import { useMemo } from 'react'
import Konva from 'konva'

const calcTextObj = ({
  text, textBox, fontFamily, fontSize
}) => {
  return new Konva.Text({
    x: 0,
    y: 0,
    text,
    fontSize,
    fontFamily,
    lineHeight: 1.2,
    padding: textBox.padding,
    width: textBox.width
  })
}

export const useCalcTextParams = ({
  textRef,
  text,
  textBox,
  width,
  height,
  fontFamily
}) => {
  // const padding = textBox.padding
  const doublePadding = textBox.padding * 2
  let fontSize = textBox.fontSize.from

  let textObj = calcTextObj({
    text, textBox, fontFamily, fontSize: textBox.fontSize.from
  })

  const newTextArrCount = Math.ceil((height / (textObj.getHeight())) * textObj.textArr.length)
  const calcedFontSize = (height / (newTextArrCount * textObj.attrs.lineHeight))

  // console.log(textObj.getHeight(), height, textBox.fontSize, calcedFontSize)
  console.log(height, textObj.getHeight(), textBox.fontSize.from)

  fontSize = calcedFontSize > textBox.fontSize.to ? textBox.fontSize.to : calcedFontSize

  textObj = calcTextObj({
    text, textBox, fontFamily, fontSize
  })

  console.log(height, textObj.getHeight(), fontSize)

  // const tagHeight = textObj.textArr.reduce((sum, item) => {
  //   return sum + (item.width > textBox.width ? Math.ceil(item.width / textBox.width) : 1)
  // }, 0) *
  // textBox.fontSize.from *
  // textRef.current.attrs.lineHeight

  const y = (() => {
    switch (textBox.vertical) {
      case 'bottom':
        return height - textObj.getHeight() - doublePadding
      case 'center':
        return (height - textObj.getHeight() - doublePadding) / 2
      case 'top':
      default:
        return 0
    }
  })()

  console.log({
    y,
    textObj,
    textRef,
    text,
    textBox,
    width,
    height,
    fontFamily
  })

  return {
    fontSize,
    y
  }
}

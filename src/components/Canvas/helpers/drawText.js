import canvasTxt from 'canvas-txt'

const getXPos = ({
  align, textWidth, width, padding
}) => {
  switch (align) {
    // case 'center':
    //   return width / 2
    // case 'right':
    //   return textWidth + padding
    // case 'left':
    default:
      return padding
  }
}

const getYPos = ({
  align, textHeight, height, padding
}) => {
  // const difference = height - textHeight

  switch (align) {
    // case 'center':
    //   return difference / 2
    // case 'bottom':
    //   return textHeight
    // case 'top':
    default:
      return padding
  }
}

export const drawText = ctx => textProps => {
  const {
    width,
    height,
    autoHeight,
    fontSize,
    fontFamily,
    fontWeight = 'normal',
    lineHeight,
    hPadding,
    vPadding,
    verticalAlign,
    textAlign,
    textColor,
    backgroundColor,
    x = 0,
    y = 0,
    text
  } = textProps

  const textWidth = width - hPadding * 2
  const textHeight = height - vPadding * 2

  const xPos = x + getXPos({
    align: textAlign,
    textWidth,
    width,
    padding: hPadding
  })

  const yPos = y + getYPos({
    align: verticalAlign,
    textHeight,
    height,
    padding: vPadding
  })

  console.log(textProps)
  ctx.fillStyle = backgroundColor || '#0000'
  ctx.fillRect(
    x,
    y,
    width,
    autoHeight ? textHeight + vPadding * 2 : height
  )

  ctx.fillStyle = textColor || '#111'
  canvasTxt.fontWeight = fontWeight
  canvasTxt.fontSize = fontSize
  canvasTxt.font = fontFamily
  canvasTxt.textBaseline = 'middle'
  canvasTxt.textAlign = textAlign
  canvasTxt.lineHeight = lineHeight
  canvasTxt.align = textAlign
  canvasTxt.vAlign = verticalAlign
  canvasTxt.debug = true

  const calcedTextHeight = canvasTxt.getTextHeight(text, fontFamily, fontSize)
  console.log('yo', calcedTextHeight, lineHeight)
  if (calcedTextHeight > lineHeight) {
    // canvasTxt.fontSize = fontSize / (calcedTextHeight / lineHeight)
    // canvasTxt.drawText(ctx, text, x, y, width, height)
  }
  canvasTxt.drawText(ctx, text, xPos, yPos, textWidth, textHeight)

  console.log({ canvasTxt })

  // lines.forEach((lineOfText, i) => {
  //   ctx.fillText(
  //     lineOfText,
  //     xPos,
  //     yPos + lineHeight * (i + 0.5)
  //   )
  // })
}

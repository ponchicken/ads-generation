import { calcImageFit } from './helpers'

const drawCover = (ctx, {
  background
}) => {
  const yoyo = calcImageFit(background.isCover)(
    background.bitmap.width,
    background.bitmap.height,
    background.width,
    background.height
  )

  const {
    width, height, x, y
  } = yoyo

  ctx.drawImage(
    background.bitmap,
    x,
    y,
    width,
    height,
    background.x,
    background.y,
    background.width,
    background.height
  )
}

const getXPos = ({
  align, textWidth, width, padding
}) => {
  switch (align) {
    case 'center':
      return width / 2
    case 'right':
      return textWidth + padding
    case 'left':
    default:
      return padding
  }
}

const getYPos = ({
  align, textHeight, height, padding
}) => {
  const difference = height - textHeight

  switch (align) {
    case 'center':
      return difference / 2
    case 'bottom':
      return textHeight
    case 'top':
    default:
      return padding
  }
}

const drawText = ctx => text => {
  const {
    width,
    height,
    autoHeight,
    lines,
    fontSize,
    fontFamily,
    fontWeight = 'normal',
    lineHeight,
    hPadding,
    vPadding,
    verticalAlign,
    textAlign,
    textWidth,
    textHeight,
    textColor,
    backgroundColor,
    x = 0,
    y = 0
  } = text

  ctx.fillStyle = backgroundColor || '#0000'
  ctx.fillRect(
    x,
    y,
    width,
    autoHeight ? textHeight + vPadding * 2 : height
  )

  ctx.fillStyle = textColor || '#111'
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
  ctx.textBaseline = 'middle'
  ctx.textAlign = textAlign

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

  lines.forEach((lineOfText, i) => {
    ctx.fillText(
      lineOfText,
      xPos,
      yPos + lineHeight * (i + 0.5)
    )
  })
}

const drawBackground = (ctx, {
  width, height, backgroundColor
}) => {
  ctx.fillStyle = backgroundColor || '#000'
  ctx.fillRect(0, 0, width, height)
}

export const editCanvas = async (ctx, {
  width, height, texts, background, backgroundColor
}) => {
  drawBackground(ctx, {
    width, height, backgroundColor
  })

  drawCover(ctx, {
    background
  })

  texts.forEach(drawText(ctx))

  return {
    state: 'ready'
  }
}

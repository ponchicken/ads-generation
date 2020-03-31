import SmartLabel from 'vendor/smartLabel/SmartlabelManager'

const sl = new SmartLabel('div', true)

export const calcText = (props) => {
  const {
    text,
    fontSize,
    fontFamily,
    fontWeight = 'normal',
    lineHeight,
    width,
    height,
    hPadding,
    vPadding
  } = props

  const textWidth = width - hPadding * 2
  const textHeight = height - vPadding * 2

  sl.setStyle({
    lineHeight: lineHeight && `${lineHeight}px`,
    fontSize: fontSize && `${fontSize}px`,
    fontFamily: fontFamily || 'Arial',
    fontWeight: fontWeight,
    fontStyle: 'normal'
  })

  const smartLabel = sl.getSmartText(text, textWidth, textHeight, false)
  const generalizedSmartlabel = SmartLabel.textToLines(smartLabel)

  return {
    ...props,
    lines: generalizedSmartlabel.lines,
    lineHeight,
    textWidth: generalizedSmartlabel.width,
    textHeight: generalizedSmartlabel.height,
    text: generalizedSmartlabel.text,
    oriText: text
  }
}

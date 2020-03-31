import React, { useCallback, useContext, useState } from 'react'
import { LinksData } from 'store'
import { editCanvas } from './editCanvas'
import { calcText } from './helpers'

export const Canvas = ({
  template, texts, background
}) => {
  const [isReady, setReady] = useState(false)
  const { loadImage } = useContext(LinksData.ActionsContext)

  const canvasElRef = useCallback(canvas => {
    if (canvas !== null) {
      const ctx = canvas.getContext('2d')
      loadImage(background)
        .then(bitmap => {
          editCanvas(ctx, {
            ...template,
            texts: texts.map((text, i) => ({
              ...template.texts[i],
              text
            })).map(calcText),
            background: {
              ...template.background,
              bitmap,
              src: background
            }
          })

          setReady(true)
        })
    }
  }, [template, texts, background, loadImage])

  return (
    <div>
      { !isReady && 'loading...'}

      <canvas
        style={{
          display: isReady ? 'block' : 'none'
        }}
        ref={canvasElRef}
        width={template.width}
        height={template.height}
      ></canvas>
    </div>
  )
}

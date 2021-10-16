import React, { useCallback, useContext, useState } from 'react'
import { LinksData, Result } from 'store'
import { editCanvas } from './editCanvas'
import { calcText, downloadCanvas } from './helpers'
import { Loader } from 'components'
import { Wrapper, RemoveButton, DownloadButton } from './styled'

export const Canvas = ({
  id, template, texts, background, onRemove
}) => {
  const [isReady, setReady] = useState(false)
  const [canvas, setCanvas] = useState(null)
  const { loadImage } = useContext(LinksData.ActionsContext)
  const { changeResultItem } = useContext(Result.ActionsContext)

  const canvasElRef = useCallback(async canvas => {
    if (canvas !== null) {
      setReady(false)
      setCanvas(canvas)
      const ctx = canvas.getContext('2d')
      const bitmap = await loadImage(background)

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

      if (canvasElRef) {
        setReady(true)
      }

      changeResultItem({
        data: {
          canvas,
          bitmap,
          texts,
          background,
          template
        },
        id
      })
    }
  }, [template, texts, background, loadImage, changeResultItem, id, setReady])

  const text = texts[0] || texts[1] || ''

  return (
    <Wrapper>
      <Loader
        isLoading={!isReady}
      />

      {isReady && <>
        <DownloadButton
          onClick={downloadCanvas({
            canvas,
            filename: `${template.width}x${template.height}_${id}_${text.substring(0, 5).replaceAll(' ', '-')}`
          })}
        >
          download
        </DownloadButton>

        <RemoveButton
          onClick={onRemove}
        />
      </>}

      <canvas
        style={{
          display: isReady ? 'block' : 'none'
        }}
        ref={canvasElRef}
        width={template.width}
        height={template.height}
      ></canvas>
    </Wrapper>
  )
}

import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export const useDownload = ({
  setLoading
}) => ({
  creatives
}) => {
  setLoading(true)
  const zip = new JSZip()

  setTimeout(() => {
    Object.entries(creatives).forEach(([key, creative]) => {
      const filePromise = new Promise((resolve) => {
        creative.canvas
          // .toCanvas({
          //   pixelRatio: 1 / creative.scale
          // })
          .toBlob(blob => {
            resolve(blob)
          })
      })

      const {
        width, height
      } = creative.template

      zip.file(
        `${width}_${height}_${key}.png`,
        filePromise
      )
    })

    zip.generateAsync({ type: 'blob' })
      .then(content => {
        saveAs(content, 'creatives.zip')
      })
      .catch(error => {
        console.warn(error)
      })
      .finally(() => {
        setLoading(false)
      })
  })
}

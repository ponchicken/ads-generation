export function createImageFromBlob (blob, size) {
  const imageEl = document.createElement('img')
  const urlCreator = window.URL || window.webkitURL
  const imageUrl = urlCreator.createObjectURL(blob)
  imageEl.src = imageUrl
  imageEl.width = size.width
  imageEl.height = size.height
  return imageEl
}

export function downloadCanvas ({ canvas, filename }) {
  return () => {
    canvas.toBlob(async blob => {
      const blobUrl = await URL.createObjectURL(blob)

      downloadBlobUrl({
        url: blobUrl,
        filename
      })
    })
  }
}

export function downloadBlobCreator ({ blob, filename }) {
  return async () => {
    const blobUrl = await URL.createObjectURL(blob)

    downloadBlobUrl({
      url: blobUrl,
      filename
    })
  }
}

export async function downloadFromUrl ({ url, filename }) {
  const blobUrl = await generateBlobUrl(url)

  downloadBlobUrl({
    url: blobUrl,
    filename
  })
}

async function generateBlobUrl (url) {
  const response = await fetch(url)
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}

function downloadBlobUrl ({ url, filename = 'file' }) {
  const link = document.createElement('a')
  link.href = url
  link.download = filename + '.png'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

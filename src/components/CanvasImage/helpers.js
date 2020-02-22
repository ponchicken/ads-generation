const fit = (cover) => {
  return (parentWidth, parentHeight, childWidth, childHeight) => {
    const doRatio = childWidth / childHeight
    const cRatio = parentWidth / parentHeight
    let width = parentWidth
    let height = parentHeight

    if (cover ? doRatio > cRatio : doRatio < cRatio) {
      height = width / doRatio
    } else {
      width = height * doRatio
    }

    return {
      width,
      height,
      x: (parentWidth - width) / 2,
      y: (parentHeight - height) / 2
    }
  }
}

export const contain = fit(true)
export const cover = fit(false)

export const generateBlobUrl = async (url) => {
  const response = await fetch(url)
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}

export const downloadFromUrl = async ({ url, filename = 'file' }) => {
  const blobUrl = await generateBlobUrl(url)

  const link = document.createElement('a')
  link.href = blobUrl
  link.download = filename + '.png'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export const getDataUrl = ref => {
  return HTMLCanvasElement.prototype.toDataURL.call(ref.current)
}

export const colorToRgba = (color) => {
  const {
    rgb: { r, g, b, a }
  } = color

  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function createImageFromBlob (blob, size) {
  const imageEl = document.createElement('img')
  const urlCreator = window.URL || window.webkitURL
  const imageUrl = urlCreator.createObjectURL(blob)
  imageEl.src = imageUrl
  imageEl.width = size.width
  imageEl.height = size.height
  return imageEl
}

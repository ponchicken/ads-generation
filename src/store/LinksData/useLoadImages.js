import { useEffect } from 'react'

const loadImageCreator = () => {
  const memoized = {}

  return (src) => {
    if (memoized[src]) return memoized[src]

    memoized[src] = new Promise((resolve) => {
      const img = new Image()
      img.src = src
      img.crossOrigin = 'Anonymous'

      img.onload = () => {
        resolve(createImageBitmap(img))
      }
    })

    return memoized[src]
  }
}

const loadImage = loadImageCreator()

const preloadImages = (images) => {
  return Promise.all(
    images.map(image => loadImage(image.src))
  )
}

export const useLoadImages = (linksData) => {
  const images = linksData.images

  useEffect(() => {
    if (images) {
      preloadImages(images)
    }
  }, [images])

  return {
    loadImage, preloadImages
  }
}

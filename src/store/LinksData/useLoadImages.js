import { useEffect } from 'react'

const loadImage = (() => {
  const memoized = {}

  return (src) => {
    return new Promise((resolve) => {
      if (!src) return resolve(null)
      if (memoized[src]) resolve(memoized[src])

      const img = new Image()
      img.src = src

      img.onload = () => {
        memoized[src] = createImageBitmap(img)
        resolve(memoized[src])
      }
    })
  }
})()

const preloadImages = (images) => {
  return Promise.all(
    images.map(image => loadImage(image.src))
  )
}

export const useLoadImages = (linksData) => {
  const images = linksData.reduce((sum, cur) => {
    return sum.concat(cur.images)
  }, [])

  useEffect(() => {
    if (images) {
      preloadImages(images)
    }
  }, [images])

  return {
    loadImage, preloadImages
  }
}

import React, { useEffect, useState } from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'
import { cover } from './helpers'

const BackgroundImage = ({
  onReady,
  width,
  height,
  url
}) => {
  const [image, imageStatus] = useImage(`${url}`)
  const [imageParams, setImageParams] = useState({})

  // crop and cover image
  useEffect(() => {
    if (imageStatus === 'loaded' && image) {
      setImageParams(cover(
        width,
        height,
        image.naturalWidth,
        image.naturalHeight
      ))
      onReady()
    }
  }, [width, height, image, imageStatus, onReady])

  if (!image) return null

  return (
    <Image
      image={image}
      {...imageParams}
    />
  )
}

export default BackgroundImage

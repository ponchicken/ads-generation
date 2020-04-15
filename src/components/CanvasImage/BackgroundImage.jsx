import React, { useEffect, useState } from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'
import { cover } from './helpers'

export const BackgroundImage = ({
  width,
  height,
  url,
  ...rest
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
    }
  }, [width, height, image, imageStatus])

  if (!image) return null

  return (
    <Image
      image={image}
      {...imageParams}
      {...rest}
    />
  )
}

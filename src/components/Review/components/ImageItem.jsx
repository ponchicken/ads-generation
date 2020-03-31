import React from 'react'
import {
  ImageItem as Wrapper, Image, Remove
} from '../styled'

export const ImageItem = ({
  image, onRemove
}) => {
  return (
    <Wrapper>
      <Image src={image.src} />
      <Remove
        onClick={onRemove}
      />
    </Wrapper>
  )
}

import React from 'react'
import { Wrapper, Spinner } from './styled'

export const Loader = ({
  isLoading = false,
  size = 'm'
}) => {
  if (!isLoading) return null

  return <Wrapper>
    <Spinner size={size} >
      <div></div><div></div>
    </Spinner>
  </Wrapper>
}

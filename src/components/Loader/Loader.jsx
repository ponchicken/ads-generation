import React from 'react'
import { Wrapper, Spinner } from './styled'

export const Loader = ({
  isLoading = false
}) => {
  if (!isLoading) return null

  return <Wrapper>
    <Spinner>
      <div></div><div></div>
    </Spinner>
  </Wrapper>
}

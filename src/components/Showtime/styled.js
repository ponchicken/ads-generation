import styled from 'styled-components'
import { CloseButton } from 'components/CloseButton'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: normal;
  margin: 0;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`

export const Item = styled.div`
  padding: 6px 0;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-m);

  canvas {
    max-width: 100%;
  }
`

export const Loader = styled.div`

`

export const RemoveItem = styled(CloseButton)``

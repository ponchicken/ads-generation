import styled from 'styled-components'
import { CloseButton } from 'components'

export const Wrapper = styled.div`
  position: relative;

  button {
    opacity: 0;
    transition: opacity .1s ease;
  }

  &:hover button {
    opacity: 1;
    transition: opacity .2s ease;
  }
`

export const RemoveButton = styled(CloseButton)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const DownloadButton = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
`

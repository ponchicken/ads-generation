import styled from 'styled-components'
import { CloseButton } from 'components/CloseButton'

export const Remove = styled(CloseButton)`
  opacity: 0;
  transition: opacity 0.3s ease;
`

export const Wrapper = styled.div`
  width: 100%;
  word-break: break-word;
  display: grid;
  grid-gap: 50px;
`

export const DataFromLink = styled.div`
  display: grid;
  grid-gap: 30px;
`

export const Section = styled.div`
  display: grid;
  grid-gap: 20px;
`

export const TextsWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
`

export const ImagesWrapper = styled(Section)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`

export const Item = styled.div`
  position: relative;
  display: block;
  padding: 10px 20px;
  background: #fff3;
  border-radius: 3px;
  overflow: hidden;

  &:hover ${Remove} {
    opacity: 1;
    transition: opacity 0.1s ease;
  }
`

export const ImageItem = styled(Item)`
  padding: 0;
  overflow: hidden;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: normal;
  margin: 0;
`

export const Image = styled.img`
  display: block;
  width: 100%;
`

import React, { useContext, useCallback } from 'react'
import { LinksData } from 'store'
import {
  Wrapper, DataFromLink, Section, TextsWrapper, ImagesWrapper, Title
} from './styled'
import { ImageItem, TextItem } from './components'

export const Review = () => {
  const { linksData } = useContext(LinksData.Context)
  const {
    setLinksDataFieldItem, removeLinksFieldItem
  } = useContext(LinksData.ActionsContext)

  const hasLinksData = Object.values(linksData).filter(link => typeof link === 'object').length > 2

  const changeFieldItem = useCallback(props => event => {
    setLinksDataFieldItem({
      ...props,
      input: event.target.textContent
    })
  }, [setLinksDataFieldItem])

  const removeFieldItem = useCallback(props => () => {
    removeLinksFieldItem(props)
  }, [removeLinksFieldItem])

  if (!hasLinksData) return null

  return (
    <Wrapper>
      <DataFromLink>
        <Section>
          <Title>
            Заголовок
          </Title>
          <TextsWrapper>
            {linksData.titles.map((title, i) => (
              <TextItem
                key={`${i}_${title}`}
                text={title}
                index={i}
                onChange={changeFieldItem({
                  field: 'titles', i
                })}
                onRemove={removeFieldItem({
                  field: 'titles', i
                })}
              />
            ))}
          </TextsWrapper>
        </Section>

        <Section>
          <Title>
            Описание
          </Title>
          <TextsWrapper>
            {linksData.texts.map((text, i) => (
              <TextItem
                key={`${i}_${text}`}
                text={text}
                index={i}
                onChange={changeFieldItem({
                  field: 'texts', i
                })}
                onRemove={removeFieldItem({
                  field: 'texts', i
                })}
              />
            ))}
          </TextsWrapper>
        </Section>

        <Section>
          <Title>
            Изображение
          </Title>
          <ImagesWrapper>
            {linksData.images.map((image, i) => (
              <ImageItem
                key={`${i}_${image.src}`}
                image={image}
                index={i}
                onRemove={removeFieldItem({
                  field: 'images', i
                })}
              />
            ))}
          </ImagesWrapper>
        </Section>
      </DataFromLink>
    </Wrapper>
  )
}

import React, { useContext, useEffect, useCallback } from 'react'
import { LinksData, Combinations } from 'store'
import {
  Wrapper, DataFromLink, Section, TextsWrapper, ImagesWrapper, Title
} from './styled'
import { ImageItem, TextItem } from './components'

export const Review = () => {
  const { linksData } = useContext(LinksData.Context)
  const {
    setLinksDataFieldItem, removeLinksFieldItem
  } = useContext(LinksData.ActionsContext)
  const { calcCombinations } = useContext(Combinations.ActionsContext)

  useEffect(() => {
    calcCombinations(linksData)
  }, [calcCombinations, linksData])

  const changeFieldItem = useCallback(props => event => {
    setLinksDataFieldItem({
      ...props,
      input: event.target.textContent
    })
  }, [setLinksDataFieldItem])

  const removeFieldItem = useCallback(props => () => {
    removeLinksFieldItem(props)
  }, [removeLinksFieldItem])

  if (!linksData) return null

  return (
    <Wrapper>
      {linksData.map((linkData, i) => (
        <DataFromLink key={i}>
          <Section>
            <Title>
              Заголовок
            </Title>
            <TextsWrapper>
              {linkData.titles.map((title, j) => (
                <TextItem
                  key={`${j}_${title}`}
                  text={title}
                  index={j}
                  onChange={changeFieldItem({
                    field: 'titles', i, j
                  })}
                  onRemove={removeFieldItem({
                    field: 'titles', i, j
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
              {linkData.texts.map((text, j) => (
                <TextItem
                  key={`${j}_${text}`}
                  text={text}
                  index={j}
                  onChange={changeFieldItem({
                    field: 'texts', i, j
                  })}
                  onRemove={removeFieldItem({
                    field: 'texts', i, j
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
              {linkData.images.map((image, j) => (
                <ImageItem
                  key={`${j}_${image.src}`}
                  image={image}
                  index={j}
                  onRemove={removeFieldItem({
                    field: 'images', i, j
                  })}
                />
              ))}
            </ImagesWrapper>
          </Section>
        </DataFromLink>
      ))}
    </Wrapper>
  )
}

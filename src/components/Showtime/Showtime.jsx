import React, { useContext, useEffect } from 'react'
import { Combinations, LinksData } from 'store'
import { Wrapper, List, Item, Title } from './styled'
import { Canvas, ResultsActions } from 'components'

export const Showtime = () => {
  const { linksData } = useContext(LinksData.Context)
  const linksDataWasChanged = useContext(LinksData.WasChanged)
  const { combinations } = useContext(Combinations.Context)
  const { removeItem, calcCombinations } = useContext(Combinations.ActionsContext)

  useEffect(() => {
    if (linksDataWasChanged) {
      calcCombinations(linksData)
    }
  }, [linksData, linksDataWasChanged, calcCombinations])

  const removeCombinationItem = (index) => () => {
    removeItem(index)
  }

  if (!combinations.length) return null

  return (
    <Wrapper>
      <Title>Результаты: {combinations.length}</Title>

      <ResultsActions />

      <List>
        {combinations.map(({ template, image, text, title }, i) => {
          const key = `${template}_${image}_${text}_${title}`
          return (
            <Item key={key}>
              <Canvas
                {...{
                  id: key,
                  texts: [linksData.titles[title], linksData.texts[text]],
                  template: linksData.templates[template],
                  background: linksData.images[image]?.src,
                  onRemove: removeCombinationItem(i)
                }}
              />
            </Item>
          )
        })}
      </List>
    </Wrapper>
  )
}

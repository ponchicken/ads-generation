import React, { useContext } from 'react'
import { getDataFromLink } from 'api'
import { LinksData, Combinations } from 'store'
import './style.css'

const block = 'LinkToSource'

export const LinkToSource = () => {
  const { setLinksData } = useContext(LinksData.ActionsContext)
  const { calcCombinations } = useContext(Combinations.ActionsContext)

  const onLinkSubmit = (e) => {
    e.preventDefault()
    getDataFromLink()
      .then(data => {
        setLinksData(data)
        calcCombinations(data)
      })
      .catch(error => console.warn(error))
  }

  return (
    <form
      className={`${block}-form`}
      onSubmit={onLinkSubmit}
    >
      <input
        className={`${block}-input`}
        placeholder='ссылка на источник'
      />
      <button
        className={`${block}-submit`}
        type="submit"
      >
        загрузить
      </button>
    </form>
  )
}

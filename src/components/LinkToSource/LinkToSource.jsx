import React, { useContext, useState } from 'react'
import { getDataFromLink } from 'api'
import { LinksData, Combinations } from 'store'
import './style.css'

const block = 'LinkToSource'

export const LinkToSource = () => {
  const [link, setLink] = useState('https://www.facebook.com/business/tools/ads-manager')
  const { setLinksData } = useContext(LinksData.ActionsContext)
  const { calcCombinations } = useContext(Combinations.ActionsContext)

  const onLinkSubmit = (e) => {
    e.preventDefault()
    getDataFromLink({
      url: link
    })
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
        value={link}
        onChange={e => setLink(e.target.value)}
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

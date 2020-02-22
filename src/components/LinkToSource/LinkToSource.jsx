import React, { useContext } from 'react'
import { getDataFromLink } from 'api'
import { LinksData } from 'store'
import './style.css'

const block = 'LinkToSource'

export const LinkToSource = () => {
  const { setLinksData } = useContext(LinksData.ActionsContext)

  const onLinkSubmit = (e) => {
    e.preventDefault()
    getDataFromLink()
      .then(data => {
        setLinksData(data)
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
        placeholder='Link to Source'
      />
      <button
        className={`${block}-submit`}
        type="submit"
      >
        process
      </button>
    </form>
  )
}

import React, { useContext, useEffect } from 'react'
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

  useEffect(() => {
    getDataFromLink()
      .then(data => {
        setLinksData(data)
      })
      .catch(error => console.warn(error))
  }, [setLinksData])

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

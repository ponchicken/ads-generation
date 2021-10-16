import React, { useContext, useCallback, useState, useEffect } from 'react'
import { getDataFromLink } from 'api'
import { LinksData, Combinations } from 'store'
import { Loader } from 'components'
import './style.css'

const block = 'LinkToSource'

export const LinkToSource = () => {
  const [isLoading, setLoading] = useState(false)
  const [link, setLink] = useState('')
  const { setLinksData } = useContext(LinksData.ActionsContext)
  const { calcCombinations } = useContext(Combinations.ActionsContext)

  const requestData = useCallback((link) => {
    setLoading(true)

    getDataFromLink({
      url: link
    })
      .then(data => {
        try {
          if (data) {
            setLinksData(data)
            calcCombinations(data)
          }
        } catch (e) {
          throw new Error(e)
        }
      })
      .catch(error => {
        console.warn(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const onLinkSubmit = (e) => {
    e.preventDefault()

    const url = new URL(location.href)
    console.log(url)

    url.searchParams.set('search', encodeURI(link))
    history.pushState({}, link, `${url.pathname}?${url.searchParams.toString()}`)

    requestData(link)
  }

  useEffect(() => {
    const url = new URL(location.href)
    const searchString = url.searchParams.get('search')

    if (searchString) {
      setLink(searchString)
      requestData(searchString)
    }
  }, [])

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
        disabled={!link || isLoading}
      >
        <Loader isLoading={isLoading} size='s' />

        {!isLoading && (
          'загрузить'
        )}
      </button>
    </form>
  )
}

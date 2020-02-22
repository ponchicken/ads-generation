import React from 'react'
import './style.css'

const block = 'LinkToSource'

export const LinkToSource = () => {
  return (
    <input
      className={`${block}`}
      placeholder='Link to Source'
    />
  )
}

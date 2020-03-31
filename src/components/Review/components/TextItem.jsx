import React from 'react'
import {
  Item, Remove
} from '../styled'

export const TextItem = ({
  text, onChange, onRemove
}) => {
  return (
    <Item>
      <span
        contentEditable
        suppressContentEditableWarning
        onBlur={onChange}
      >
        { text }
      </span>
      <Remove
        onClick={onRemove}
      />
    </Item>
  )
}

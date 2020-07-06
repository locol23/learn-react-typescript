import React, { useContext } from 'react'
import { Context } from './context'
import styled from 'styled-components'

const lists = ['blue', 'red', 'green']

export const Foo = () => {
  const context = useContext(Context)

  return (
    <>
      <div>{context.text}</div>
      {lists.map((color, index) => (
        <Item key={`${color}-${index}`} color={color} />
      ))}
    </>
  )
}

const Item = styled.li({}, ({ color }) => ({
  backgroundColor: `${color}`,
}))

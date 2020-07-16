import React, { useContext } from 'react'
import { Context } from './context'

export const Foo = () => {
  const context = useContext(Context)

  return <div>{context.text}</div>
}


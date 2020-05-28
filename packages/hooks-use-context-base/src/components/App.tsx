import React from 'react'
import { Context } from './context'
import { Baa } from './Baa'

export const App = () => {
  const value = { text: 'foo' }

  return (
    <Context.Provider value={value}>
      <Baa />
    </Context.Provider>
  )
}

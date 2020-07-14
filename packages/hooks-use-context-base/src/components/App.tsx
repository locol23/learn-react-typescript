import React from 'react'
import { Context } from './context'
import { Bar } from './Bar'

export const App = () => {
  const value = { text: 'foo' }

  return (
    <Context.Provider value={value}>
      <Bar />
    </Context.Provider>
  )
}

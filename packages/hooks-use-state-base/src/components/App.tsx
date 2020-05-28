import React, { useState } from 'react'

export const App = () => {
  const [title, setTitle] = useState<string>('Initial Title')
  const handler = () => setTitle('Change Title')

  return (
    <>
      <h1>{title}</h1>
      <button onClick={handler}>click</button>
    </>
  )
}


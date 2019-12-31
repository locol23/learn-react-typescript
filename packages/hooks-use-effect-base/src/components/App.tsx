import React, { useEffect, useState } from 'react'

export const App = () => {
  const [title, setTitle] = useState('Initial Title')

  useEffect(() => {
    setTimeout(() => {
      setTitle('Use Effect')
    }, 2000)
  }, [])

  const [text, setText] = useState('Initial Text')
  const handler = () => setText('Text 1')
  const handler2 = () => setText('Text 2')

  useEffect(() => console.log(`current text is ${text}`), [text])

  return (
    <>
      <h1>{title}</h1>
      <button onClick={handler}>click1</button>
      <button onClick={handler2}>click2</button>
    </>
  )
}


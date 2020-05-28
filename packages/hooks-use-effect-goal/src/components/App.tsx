import React, { useEffect, useState } from 'react'

export const App = () => {
  const [title, setTitle] = useState('Initial Title')

  useEffect(() => {
    setTimeout(() => {
      setTitle('Use Effect')
    }, 2000)
  }, [])

  const [text, setText] = useState('Initial Text')
  const handlerOne = () => setText('Text 1')
  const handlerTwo = () => setText('Text 2')

  useEffect(() => console.log(`current text is ${text}`), [text])

  const createSession = () => console.log('create session')
  const postData = (data: { name: string }) => console.log('post data', data)
  const closeSession = () => console.log('close session')

  useEffect(() => {
    createSession()
    postData({ name: 'Tom' })

    return closeSession()
  }, [])

  return (
    <>
      <h1>{title}</h1>
      <div>{text}</div>
      <button onClick={handlerOne}>click1</button>
      <button onClick={handlerTwo}>click2</button>
    </>
  )
}

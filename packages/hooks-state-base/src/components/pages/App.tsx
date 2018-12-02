import React, { useEffect, useState } from 'react'
import { Layout } from '../utils/Layout'

export const App = () => {
  const [text, setText] = useState('Function Components')
  const handler = () => setText('Change Text!!')

  return (
    <React.Fragment>
      <Layout>
        <h1>{text}</h1>
      </Layout>
      <Layout>
        <button onClick={handler}>change</button>
      </Layout>
    </React.Fragment>
  )
}

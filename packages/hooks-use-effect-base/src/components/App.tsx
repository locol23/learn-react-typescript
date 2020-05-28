import React, { useEffect, useState } from 'react'

export const App = () => {
  const [title, setTitle] = useState('Initial Title')

  useEffect(() => {
    setTimeout(() => {
      setTitle('Use Effect')
    }, 2000)
  }, [])

  return <h1>{title}</h1>
}


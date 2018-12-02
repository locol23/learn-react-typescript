import React, { useEffect, useState } from 'react'
import { Text } from '../atoms/Text'
import { Layout } from '../utils/Layout'

export const Footer = () => {
  const [text, setText] = useState('')
  useEffect(() => setText('Footer'), [])

  return (
    <Layout>
      <Text text={text} />
    </Layout>
  )
}

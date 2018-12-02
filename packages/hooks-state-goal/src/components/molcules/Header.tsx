import React, { useEffect, useState } from 'react'
import { Text } from '../atoms/Text'
import { Layout } from '../utils/Layout'

export const Header = () => {
  const [text, setText] = useState('')
  useEffect(() => setText('Header'), [])

  return (
    <Layout>
      <Text text={text} />
    </Layout>
  )
}

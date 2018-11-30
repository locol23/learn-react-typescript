import React from 'react'
import { Contents } from '../organisms/Contents'

export const App = () => {
  const contentsProps = {
    title: 'Header',
    text: 'Footer',
    value: 'alert',
    handler: (str: string) => alert(str),
  }
  return <Contents {...contentsProps} />
}

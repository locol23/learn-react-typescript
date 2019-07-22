import React from 'react'
import { Contents } from '../organisms/Contents'

const contentsProps = {
  title: 'Header',
  text: 'Footer',
  handler: () => alert('alert'),
}

export const App = () => <Contents {...contentsProps} />

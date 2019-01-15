import React from 'react'
import { Action, HeaderState } from '../../reducers/header'
import { Layout } from '../utils/Layout'

type Props = HeaderState & {
  updateText: (str: string) => Action
}

export const Header = (props: Props) => (
  <>
    <Layout>
      <h1>{props.text}</h1>
    </Layout>
    <Layout>
      <button onClick={() => props.updateText('React')}>Change React</button>
      <button onClick={() => props.updateText('TypeScript')}>
        Change TypeScript
      </button>
    </Layout>
  </>
)

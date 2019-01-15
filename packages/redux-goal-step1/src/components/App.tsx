import React from 'react'
import styled from 'styled-components'
import { Action, CounterState } from '../reducer'

type Props = CounterState & {
  increment: () => Action
  decrement: () => Action
  reset: (num: number) => Action
}

export const App = (props: Props) => {
  return (
    <React.Fragment>
      <Layout>
        <h1>{props.count}</h1>
      </Layout>
      <Layout>
        <button onClick={props.increment}>increment</button>
        <button onClick={props.decrement}>decrement</button>
        <button onClick={() => props.reset(props.defaultCount)}>reset</button>
      </Layout>
    </React.Fragment>
  )
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`

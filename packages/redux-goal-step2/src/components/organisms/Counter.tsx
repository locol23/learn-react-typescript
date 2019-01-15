import React from 'react'
import { Action, CounterState } from '../../reducers/counter'
import { Layout } from '../utils/Layout'

type Props = CounterState & {
  increment: () => Action
  decrement: () => Action
  reset: (num: number) => Action
}

export const Counter = (props: Props) => (
  <div>
    <Layout>
      <h1>{props.counter.count}</h1>
    </Layout>
    <Layout>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
      <button onClick={() => props.reset(props.defaultCount)}>reset</button>
    </Layout>
  </div>
)

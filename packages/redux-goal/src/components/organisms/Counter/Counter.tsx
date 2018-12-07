import React from 'react'
import { CounterAction, CounterState, reset } from '../../../reducer'
import { Layout } from '../../utils/Layout'

type Props = CounterState & {
  increment: () => CounterAction
  decrement: () => CounterAction
  reset: (num: number) => CounterAction
}

export const Counter = (props: Props) => (
  <div>
    <Layout>
      <h1>{props.count}</h1>
    </Layout>
    <Layout>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
      <button onClick={() => props.reset(props.defaultCount)}>reset</button>
    </Layout>
  </div>
)

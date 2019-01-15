import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Action, CounterState, decrement, increment, reset } from '../reducer'
import { Layout } from './utils/Layout'

type Props = CounterState & {
  increment: () => Action
  decrement: () => Action
  reset: (num: number) => Action
}

// Component
const Component = (props: Props) => {
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

// Container
const mapStateToProps = (state: CounterState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: (num: number) => dispatch(reset(num)),
})

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

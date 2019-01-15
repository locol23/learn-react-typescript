import React from 'react'
import { connect, Provider } from 'react-redux'
import { Dispatch } from 'redux'
import { createStore } from 'redux'
import { Layout } from './utils/Layout'

// Actions
const INCREMENT = 'counter/increment'
const RESET = 'counter/reset'

// Action Creators
const increment = () => ({ type: INCREMENT as typeof INCREMENT })
const reset = (num: number) => ({
  type: RESET as typeof RESET,
  payload: num,
})
type Action = ReturnType<typeof increment | typeof reset>

// Reducers
export type CounterState = typeof initialCounterState
const initialCounterState = {
  count: 0,
  defaultCount: 0,
}
export const reducer = (state = initialCounterState, action: Action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 }
    }
    case RESET: {
      return { ...state, count: action.payload }
    }
    default: {
      const _: never = action
      return state
    }
  }
}

// Store
export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

// Component
type Props = CounterState & {
  increment: () => Action
  reset: (num: number) => Action
}
const Component = (props: Props) => {
  return (
    <React.Fragment>
      <Layout>
        <h1>{props.count}</h1>
      </Layout>
      <Layout>
        <button onClick={props.increment}>increment</button>
        <button onClick={() => props.reset(props.defaultCount)}>reset</button>
      </Layout>
    </React.Fragment>
  )
}

// Container
const mapStateToProps = (state: CounterState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  reset: (num: number) => dispatch(reset(num)),
})
const AppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

// connect Store
export const App = () => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
)

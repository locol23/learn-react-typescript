import { Dispatch } from 'redux'

const INCREMENT = 'counter/increment'
const DECREMENT = 'counter/decrement'
const RESET = 'counter/reset'

interface Increment {
  type: typeof INCREMENT
}
interface Decrement {
  type: typeof DECREMENT
}
interface Reset {
  type: typeof RESET
  payload: number
}

export type Action = Increment | Decrement | Reset

export const increment = (): Increment => ({ type: INCREMENT })
export const decrement = (): Decrement => ({ type: DECREMENT })
export const reset = (num: number): Reset => ({ type: RESET, payload: num })

export interface CounterState {
  count: number
  defaultCount: number
}

const initialCounterState: CounterState = {
  count: 0,
  defaultCount: 0,
}

export const reducer = (
  state: CounterState = initialCounterState,
  action: Action
) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 }
    }
    case DECREMENT: {
      return { ...state, count: state.count - 1 }
    }
    case RESET: {
      return { ...state, count: action.payload }
    }
    default: {
      return state
    }
  }
}

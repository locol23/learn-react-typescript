import { combineReducers } from 'redux'

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

export type CounterAction = Increment | Decrement | Reset

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

const counter = (
  state: CounterState = initialCounterState,
  action: CounterAction
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

const UPDATE_TEXT = 'setting/update-text'

interface UpdateText {
  type: typeof UPDATE_TEXT
  payload: string
}

export const updateText = (str: string): UpdateText => ({
  type: UPDATE_TEXT,
  payload: str,
})

export interface HeaderState {
  text: string
}

export type HeaderAction = UpdateText

const initialHeaderState = {
  text: 'Redux',
}

const header = (
  state: HeaderState = initialHeaderState,
  action: HeaderAction
) => {
  switch (action.type) {
    case UPDATE_TEXT: {
      return { text: action.payload }
    }
    default: {
      return state
    }
  }
}

export const reducer = combineReducers({ counter, header })

export interface RootState {
  counter: CounterState
  header: HeaderState
}

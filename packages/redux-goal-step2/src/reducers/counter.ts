const INCREMENT = 'counter/increment' as const
const DECREMENT = 'counter/decrement' as const
const RESET = 'counter/reset' as const

export type Action = ReturnType<typeof increment | typeof decrement | typeof reset>

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const reset = (num: number) => ({
  type: RESET,
  payload: num,
})

export type CounterState = typeof initialState

const initialState = {
  count: 0,
  defaultCount: 0,
}

export const reducer = (state = initialState, action: Action) => {
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
      const _: never = action
      return state
    }
  }
}

const UPDATE_TEXT = 'setting/update-text'

export const updateText = (str: string) => ({
  type: UPDATE_TEXT as typeof UPDATE_TEXT,
  payload: str,
})

export type Action = ReturnType<typeof updateText>

export type HeaderState = typeof initialState

const initialState = {
  text: 'Redux',
}

export const reducer = (state = initialState, action: Action) => {
  if (action.type === UPDATE_TEXT) {
    return { text: action.payload }
  }
  return state
}

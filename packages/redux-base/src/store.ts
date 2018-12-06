import { createStore } from 'redux'
import { reducer } from './reducer'

export const store = createStore(
  reducer,
  // tslint:disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

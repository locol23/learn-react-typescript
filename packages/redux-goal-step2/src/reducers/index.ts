import { combineReducers } from 'redux'
import * as counter from './counter'
import * as header from './header'

export type RootState = {
  header: header.HeaderState
  counter: counter.CounterState
}

export const rootReducer = combineReducers<RootState>({
  header: header.reducer,
  counter: counter.reducer,
})

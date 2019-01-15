import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { decrement, increment, reset, RootState } from '../../../reducer'
import { Counter as CounterContent } from './Counter'

const mapStateToProps = (state: RootState) => ({ ...state.counter })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: (num: number) => dispatch(reset(num)),
})

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContent)

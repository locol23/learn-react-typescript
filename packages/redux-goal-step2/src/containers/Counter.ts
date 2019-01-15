import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Counter as CounterComponent } from '../components/organisms/Counter'
import { RootState } from '../reducers'
import { decrement, increment, reset } from '../reducers/counter'

const mapStateToProps = (state: RootState) => ({ counter: state.counter })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: (num: number) => dispatch(reset(num)),
})

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent)

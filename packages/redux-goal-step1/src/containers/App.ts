import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { App as AppComponent } from '../components/App'
import { CounterState, decrement, increment, reset } from '../reducer'

const mapStateToProps = (state: CounterState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: (num: number) => dispatch(reset(num)),
})

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

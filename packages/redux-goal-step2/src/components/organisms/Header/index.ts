import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState, updateText } from '../../../reducer'
import { Header as HeaderContent } from './Header'

const mapStateToProps = (state: RootState) => ({ ...state.header })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateText: (str: string) => dispatch(updateText(str)),
})

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContent)

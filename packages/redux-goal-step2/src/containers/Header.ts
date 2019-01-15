import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Header as HeaderComponent } from '../components/organisms/Header'
import { RootState } from '../reducers'
import { updateText } from '../reducers/header'

const mapStateToProps = (state: RootState) => ({ header: state.header })
const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateText: (str: string) => dispatch(updateText(str)),
})

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

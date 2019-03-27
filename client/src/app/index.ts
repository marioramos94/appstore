import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import AppComponent from './App'
import { ApplicationState } from '../common/types'
import { getAllProducts } from '../actions/products'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ getAllProducts }, dispatch)
}

const mapStateToProps = (state: ApplicationState) => ({
  products: state.products
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

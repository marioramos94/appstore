import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { ApplicationState } from '../../common/types'
import ProductsComponent from './Products'

const mapStateToProps = (state: ApplicationState) => ({
  products: state.products.data
})

export default connect(mapStateToProps)(ProductsComponent)

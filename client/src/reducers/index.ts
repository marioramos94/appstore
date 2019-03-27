import { combineReducers } from 'redux'
import productsReducer from './products'
import cartitemsReducer from './cartitems'
import { ApplicationState } from '../common/types'

const rootReducer = combineReducers<ApplicationState>({
  products: productsReducer,
  cartitems: cartitemsReducer
})

export default rootReducer

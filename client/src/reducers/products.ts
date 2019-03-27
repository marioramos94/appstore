import { ProductsState } from '../common/types'
import { PRODUCTS } from '../common/constants'

const initialState: ProductsState = {
  data: [],
  loading: false
}

const devices = (state = initialState, action: any) => {
  switch (action.type) {
    case PRODUCTS.CREATE_SUCCESS:
      return { ...state, data: state.data.concat(action.payload) }
    case PRODUCTS.UPDATE:
      return state
    case PRODUCTS.GET_ALL_SUCCESS:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default devices

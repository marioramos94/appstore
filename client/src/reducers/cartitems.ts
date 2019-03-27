import { CartitemsState } from '../common/types'
import { CARTITEMS } from '../common/constants'

const initialState: CartitemsState = {
  data: []
}

const cartitems = (state = initialState, action: any) => {
  switch (action.type) {
    case CARTITEMS.SET_ALL:
      return state
    case CARTITEMS.GET_ALL:
      return state
    default:
      return state
  }
}

export default cartitems

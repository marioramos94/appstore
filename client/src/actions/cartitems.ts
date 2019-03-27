import { CARTITEMS } from '../common/constants'

export const cartitems = (data: string[]) => ({
  type: CARTITEMS.SET_ALL,
  payload: data
})

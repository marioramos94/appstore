import { PRODUCTS } from '../common/constants'

export const getAllProducts = () => ({
  type: PRODUCTS.GET_ALL
})

export const getAllProductsSuccess = (data: any) => ({
  type: PRODUCTS.GET_ALL_SUCCESS,
  payload: data
})

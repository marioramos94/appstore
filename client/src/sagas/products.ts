import { takeEvery, call, put } from 'redux-saga/effects'
import { PRODUCTS } from '../common/constants'
import { getAllProducts } from '../connectivity'
import { getAllProductsSuccess } from '../actions/products'

function* handleProductGetAll() {
  try {
    const { data } = yield call(getAllProducts)
    yield put(getAllProductsSuccess(data))
  } catch (error) {
    console.log('Somethign went wrong getting devices')
  }
}

export default function* watchDeviceActions() {
  yield takeEvery(PRODUCTS.GET_ALL, handleProductGetAll)
}

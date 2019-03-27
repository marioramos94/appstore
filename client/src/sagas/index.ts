import { all } from 'redux-saga/effects'
import productsSaga from './products'

function* sagas() {
  yield all([productsSaga()])
}

export default sagas

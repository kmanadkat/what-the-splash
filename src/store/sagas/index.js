import { takeEvery } from 'redux-saga/effects'
import { IMAGES } from '../actions/constants'
import handleImagesLoad from './imagesSaga'

// Watcher Saga
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

export default rootSaga

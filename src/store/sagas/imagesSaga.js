import { call, put } from 'redux-saga/effects'
import fetchImages from '../../services/fetchImages'
import { setError, setImages } from '../actions'

function* handleImagesLoad() {
  try {
    const images = yield call(fetchImages)
    yield put(setImages(images))
  } catch (err) {
    yield put(setError([err.toString()]))
  }
}

export default handleImagesLoad

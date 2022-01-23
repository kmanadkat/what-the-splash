import { call, put, select } from 'redux-saga/effects'
import fetchImages from '../../services/fetchImages'
import { setError, setImages } from '../actions'

function* handleImagesLoad() {
  try {
    const page = yield select((state) => state.images.page)
    const images = yield call(fetchImages, page)
    yield put(setImages(images))
  } catch (err) {
    yield put(setError([err.toString()]))
  }
}

export default handleImagesLoad

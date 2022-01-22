import { IMAGES } from './constants'

const loadImages = () => {
  return {
    type: IMAGES.LOAD,
  }
}

const setImages = (images) => {
  return {
    type: IMAGES.LOAD_SUCCESS,
    payload: images,
  }
}

const setError = (error) => {
  return {
    type: IMAGES.LOAD_FAIL,
    payload: error,
  }
}

export { loadImages, setImages, setError }

import { IMAGES } from '../actions/constants'

const initialState = {
  loading: false,
  images: [],
  errors: [],
}

const imagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGES.LOAD:
      return {
        loading: true,
        images: [],
        errors: [],
      }

    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        images: [...payload],
      }

    case IMAGES.LOAD_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...payload],
      }

    default:
      return { ...state }
  }
}

export default imagesReducer

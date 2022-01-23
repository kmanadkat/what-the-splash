import { IMAGES } from '../actions/constants'

const initialState = {
  loading: false,
  images: [],
  errors: [],
  page: 1,
}

const imagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGES.LOAD:
      return {
        ...state,
        loading: true,
      }

    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        images: [...state.images, ...payload],
        page: state.page + 1,
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

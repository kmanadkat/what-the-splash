import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loadImages } from '../store/actions'
import Errors from './Errors'
import Loading from './Loading'

const ImageGrid = () => {
  const { images, errors, loading } = useSelector((store) => store.images)
  const dispatch = useDispatch()

  const loadImagesHandler = React.useCallback(() => {
    dispatch(loadImages())
  }, [dispatch])

  React.useEffect(() => {
    loadImagesHandler()
  }, [loadImagesHandler])

  return (
    <div className="content">
      <Errors errors={errors} />
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}>
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      <div className="load-btn-wrapper">
        {loading && <Loading />}
        {!loading && errors.length === 0 && (
          <button onClick={loadImagesHandler}>Load More Images</button>
        )}
      </div>
    </div>
  )
}

export default ImageGrid

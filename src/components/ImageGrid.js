import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { loadImages } from '../store/actions'
import Errors from './Errors'
import Loading from './Loading'

const ImageGrid = () => {
  const { images, errors, loading } = useSelector((store) => store.images)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(loadImages())
  }, [dispatch])

  if (loading) {
    return <Loading />
  }

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
    </div>
  )
}

export default ImageGrid

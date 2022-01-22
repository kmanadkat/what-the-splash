import React from 'react'
import { useSelector } from 'react-redux'
import Errors from './Errors'

const ImageGrid = () => {
  const { images, errors, loading } = useSelector((store) => store.images)
  // const [images, setImages] = React.useState([])

  // React.useEffect(() => {
  //   const key = process.env.REACT_APP_KEY

  //   fetch(`https://api.unsplash.com/search/photos/?client_id=${key}&per_page=28&query=bungalow`)
  //     .then((res) => res.json())
  //     .then((data) => setImages(data.results))
  // }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="content">
      <Errors errors={errors} />
      <section className="grid">
        {images.map((image) => (
          <div key={image.id} className={`item item-${Math.ceil(image.height / image.width)}`}>
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default ImageGrid

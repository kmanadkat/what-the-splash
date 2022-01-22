import React from 'react'

const ImageGrid = () => {
  const [images, setImages] = React.useState([])

  React.useEffect(() => {
    const key = process.env.REACT_APP_KEY

    fetch(`https://api.unsplash.com/search/photos/?client_id=${key}&per_page=28&query=university`)
      .then((res) => res.json())
      .then((data) => setImages(data.results))
  }, [])

  return (
    <div className="content">
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

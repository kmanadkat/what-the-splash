const fetchImages = async () => {
  const key = process.env.REACT_APP_KEY
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${key}&per_page=36&query=bungalow`
  )
  const data = await response.json()
  if (response.status >= 400) {
    throw new Error(data.errors)
  }
  return data.results
}

export default fetchImages

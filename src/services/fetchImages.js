const fetchImages = async (page) => {
  const key = process.env.REACT_APP_KEY

  // Intentional 3 secs Delay
  await new Promise((resolve, _) => {
    setTimeout(() => {
      resolve('Done')
    }, 3000)
  })

  const response = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${key}&per_page=12&query=bungalow&page=${page}`
  )
  const data = await response.json()
  if (response.status >= 400) {
    throw new Error(data.errors)
  }
  return data.results
}

export default fetchImages

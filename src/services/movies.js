const API_KEY = '5a01ef6b'

export async function searchMovies({ search }) {
  if (search === '') return null

  try {
    const response = await fetch(`https://omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (err) {
    throw new Error('Error searching movies')
  }
}

const api_key = 'eca70b6d36595899a201e29baccd8874'
const Base_url = 'https://api.themoviedb.org/3'

export const getpopularmovies = async () => {
     const response = await fetch(`${Base_url}/movie/popular?api_key=${api_key}`)
     const data= await response.json()
     return data.results
}

export const searchmovies = async (query) => {
    const response = await fetch(`${Base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}
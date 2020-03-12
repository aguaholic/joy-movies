import axios from 'axios'

// The chosen API does not have a random option.
// The solution I found was to fetch the latest id(type number), which is the id
// from the last movie added to the API assortiment.
// Then this id is multiplied by a random number, which gives me a random movie id from
// the API's assortiment.
// When implementing the Random component, this random id is fetched from the API and
// rendered to the screen.

export function randomId () {
  return axios.get('https://api.themoviedb.org/3/movie/latest?api_key=a109923888458bdee8244628cbd0abb2&language=en-US')
    .then(response => {
      const id = response.data.id
      const randomId = Math.floor((id * Math.random()) + 1)
      return randomId
    })
}

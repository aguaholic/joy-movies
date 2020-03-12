import axios from 'axios'

export function randomId () {
  return axios.get('https://api.themoviedb.org/3/movie/latest?api_key=a109923888458bdee8244628cbd0abb2&language=en-US')
    .then(response => {
      const id = response.data.id
      const randomId = Math.floor((id * Math.random()) + 1)
      return randomId
    })
}

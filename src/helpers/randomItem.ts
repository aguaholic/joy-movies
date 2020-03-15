import axios from 'axios'

import { apiKey, apiRoot } from '../constants'
// The chosen API does not have a random option.
// The solution I found was to fetch the latest id(type number), which is the id
// from the last movie added to the API's assortment.
// All the ids from this API are sequential, which means they start at 1 and go all
// the way up to the latest movie added.
// Knowing that, this latest id is multiplied by a random number, which gives me
// a random movie id from the API's assortment.
export function randomId () {
  return axios.get(apiRoot + 'movie/latest?api_key=' + apiKey + '&language=en-US')
    .then(response => {
      const id = response.data.id
      const randomId = Math.floor((id * Math.random()) + 1)
      return randomId
    })
}

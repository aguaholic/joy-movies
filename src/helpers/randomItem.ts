import axios from 'axios'

import { apiKey, apiRoot } from '../constants'
import { getItem } from './getItem'

// The chosen API does not have a random option.
// The solution I found was to fetch the latest id(type number), which is the id
// from the last movie added to the API's assortiment.
// All the ids from this API are sequential, which means they start at 1 and go all
// the way up to the latest movie added.
// Knowing that, this latest id is multiplied by a random number, which gives me
// a random movie id from the API's assortiment.
function randomId () {
  return axios.get(apiRoot + 'movie/latest?api_key=' + apiKey + '&language=en-US')
    .then(response => {
      const id = response.data.id
      const randomId = Math.floor((id * Math.random()) + 1)
      return randomId
    })
}

// In this function, the randomId returned from the function above is fetched from the API.
export function randomItem () {
  return randomId()
    .then(randomId => {
      return axios.get(apiRoot + 'movie/' + randomId + '?api_key=' + apiKey + '&language=en-US')
        .then(response => {
        // I use an if statement to block porn.
        // Every adult movie is not shown but instead it throws an error.
          if (response.data.adult) throw new Error('Porn!')
          return getItem(response.data)
        })
    })
    .catch(err => {
      throw err
    })
}

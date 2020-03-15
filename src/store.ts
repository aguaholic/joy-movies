import Vuex from 'vuex'

import axios from 'axios'

// eslint-disable-next-line no-unused-vars
import { getItem, ResponseItem, Item } from './helpers/getItem'
import { randomId } from './helpers/randomItem'
import { apiKey, apiRoot } from './constants'

export interface State {
    movie: null | Item,
    movies: Item[],
    recommended: Item[]
}

export function makeStore () {
  return new Vuex.Store({
    state: {
      movie: null,
      movies: [],
      recommended: []
    } as State,
    mutations: {
      setMovie (state, item) {
        state.movie = item
      },
      setMovies (state, items) {
        state.movies = items
      },
      setRecommended (state, items) {
        state.recommended = items
      }
    },
    actions: {
      fetchMovies (context) {
        axios.get(
          apiRoot + 'search/movie/?api_key=' + apiKey + '&page=1&language=en-US&query=joy&include_adult=false'
        )
          .then(response => {
            const items = response.data.results
              .slice(0, 10)
              .map((item: ResponseItem) => getItem(item))
            context.commit('setMovies', items)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      fetchMovie (context, id) {
        axios.get(apiRoot + 'movie/' + id + '?api_key=' + apiKey + '&language=en-US')
          .then(response => {
            const item = getItem(response.data)
            context.commit('setMovie', item)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      fetchRecommended (context, id) {
        axios.get(apiRoot + 'movie/' + id + '/recommendations?api_key=' + apiKey + '&language=en-US&page=1')
          .then(response => {
            const recommendedItems = response.data.results
              .slice(0, 3)
              .map((item: ResponseItem) => getItem(item))
            context.commit('setRecommended', recommendedItems)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      fetchRandom (context) {
        // This function is going to fail sometimes because some of the ids don't exist
        // anymore or are adult movies(which are blocked in randomItem).
        // If it fails, it calls fetchItem again, so there is always an available movie to
        // be shown in the page.
        return randomId()
          .then(randomId => {
            return axios.get(apiRoot + 'movie/' + randomId + '?api_key=' + apiKey + '&language=en-US')
              .then(response => {
                // I use an if statement to block porn.
                // Every adult movie is not shown but instead it throws an error.
                if (response.data.adult) throw new Error('Only for adults!')
                context.commit('setMovie', getItem(response.data))
              })
          })
          .catch(function () {
            context.dispatch('fetchRandom')
          })
      }
    }
  })
}

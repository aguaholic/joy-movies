<template>
    <div>
        <NavBar />
        <Movie
            v-if="item"
            :item="item"
        >
            <Recommended />
        </Movie>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './NavBar.vue'
import Movie from './Movie.vue'
import Footer from './Footer.vue'
import Recommended from './Recommended.vue'

import axios from 'axios'

// eslint-disable-next-line no-unused-vars
import { getItem, Item } from '../helpers/getItem'
import { apiKey, apiRoot } from '../constants'

interface Data {
  item: null | Item
}

export default Vue.extend({
  name: 'Detail',
  components: {
    NavBar,
    Movie,
    Footer,
    Recommended
  },
  data (): Data {
    return {
      item: null
    }
  },
  mounted () {
    this.fetchItem()
  },
  updated () {
    this.fetchItem()
  },
  methods: {
    fetchItem () {
      axios.get(apiRoot + 'movie/' + this.$route.params.id + '?api_key=' + apiKey + '&language=en-US')
        .then(response => {
          this.item = getItem(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
</script>

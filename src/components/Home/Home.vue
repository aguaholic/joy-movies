<template>
    <div class="home">
        <NavBar />
        <Sorting
            :items="items"
            :on-sort="sorted"
        />
        <List :items="items" />
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '../NavBar.vue'
import List from './List.vue'
import Footer from '../Footer.vue'
import Sorting from './Sorting.vue'

import axios from 'axios'

// eslint-disable-next-line no-unused-vars
import { getItem, ResponseItem, Item } from '../../helpers/getItem'

interface Data {
  items: null | Item[]
}

export default Vue.extend({
  name: 'Home',
  components: {
    NavBar,
    List,
    Footer,
    Sorting
  },
  data (): Data {
    return {
      items: null
    }
  },
  mounted () {
    this.fetchItems()
  },
  methods: {
    fetchItems () {
      axios
        .get(
          'https://api.themoviedb.org/3/search/movie/?api_key=a109923888458bdee8244628cbd0abb2&page=1&language=en-US&query=joy&include_adult=false'
        )
        .then(response => {
          this.items = response.data.results
            .slice(0, 10)
            .map((item: ResponseItem) => getItem(item))
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    sorted (items) {
      this.items = items
    }
  }
})
</script>

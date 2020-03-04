<template>
  <div class="home">
    <NavBar />
      <List v-bind:items="items"/>
      <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '../NavBar.vue'
import List from './List.vue'
import Footer from '../Footer.vue'

import axios from 'axios'

import { getItem } from '../../helpers/getItem'

interface Item {
  id: number,
  title: string,
  src: string, 
  rating: number,
  releaseYear: string
}

export default Vue.extend({
  name: 'Home',
    data() {
      return {
        items: null as Item[] | null
      }
  },
  methods: {
    fetchItems() {
      axios.get('https://api.themoviedb.org/3/search/movie/?api_key=a109923888458bdee8244628cbd0abb2&page=1&language=en-US&query=joy&include_adult=false')
        .then(response => {
          this.items = response.data.results
          .slice(0, 10)
          .map(item => getItem(item))
          })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  mounted() {
    this.fetchItems()
  },
  components: {
    NavBar,
    List,
    Footer,
  },
});
</script>

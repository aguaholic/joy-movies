<template>
  <div class="home">
    <NavBar />
      <List v-bind:items="items"/>
      <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import NavBar from '../NavBar.vue'
import List from './List.vue'
import Footer from '../Footer.vue'

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
          .map(item => {
            if (item.backdrop_path) {
              return { 
                id: item.id,
                title: item.title,
                src: 'https://image.tmdb.org/t/p/w500'+ item.backdrop_path, 
                rating: item.vote_average,
                releaseYear: item.release_date
              }
            } else if (item.poster_path){
              return { 
                id: item.id,
                title: item.title,
                src: 'https://image.tmdb.org/t/p/w500'+ item.poster_path, 
                rating: item.vote_average,
                releaseYear: item.release_date
              }
            } else {
              return { 
                id: item.id,
                title: item.title,
                src: null, 
                rating: item.vote_average,
                releaseYear: item.release_date
              }
            }
          })
         console.log(response)
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

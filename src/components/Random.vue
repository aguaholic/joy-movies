<template>
    <div>
        <NavBar />
        <Movie
            v-if="item"
            :item="item"
        >
            <b-button @click="fetchItem">
                Try it again
            </b-button>
        </Movie>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './NavBar.vue'
import Movie from './Movie.vue'
import Footer from './Footer.vue'

import { randomItem } from '../helpers/randomItem'
// eslint-disable-next-line no-unused-vars
import { getItem, Item } from '../helpers/getItem'

interface Data {
  item: null | Item
}

export default Vue.extend({
  name: 'Random',
  components: {
    NavBar,
    Movie,
    Footer
  },
  data (): Data {
    return {
      item: null
    }
  },
  mounted () {
    this.fetchItem()
  },
  methods: {
    fetchItem () {
      randomItem()
        .then((item) => {
          this.item = item
        }).catch(() => {
          // This function is going to fail sometimes because some of the ids don't exist
          // anymore or are adult movies(which are blocked in randomItem).
          // If it fails, it calls fetchItem again, so there is always an available movie to
          // be shown in the page.
          this.fetchItem()
        })
    }
  }
})
</script>

<style scoped>
.btn-secondary {
  border-color: #102E4A;
  background-color: #102E4A;
  border-radius: 0;
}
.btn-secondary:focus {
  border-color: #102E4A;
  background-color: #102E4A;
}
.btn-secondary:hover {
  background-color: rgb(30,85,137, .1);
  color: #102E4A;
}
@media only screen and (max-width: 600px) {
  .btn-secondary {
    margin: auto;
  }
}
</style>

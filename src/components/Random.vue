<template>
    <div>
        <NavBar />
        <Movie
            v-if="item"
            :item="item"
        >
            <b-button @click="fetchRandom">
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

import { mapActions, mapState } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { State } from '../store'

export default Vue.extend({
  name: 'Random',
  components: {
    NavBar,
    Movie,
    Footer
  },
  computed: mapState({
    item: state => (state as State).movie
  }),
  mounted () {
    this.fetchRandom()
  },
  methods: {
    ...mapActions([
      'fetchRandom'
    ])
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

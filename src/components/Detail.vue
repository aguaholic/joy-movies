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

import { mapActions, mapState } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { State } from '../store'

export default Vue.extend({
  name: 'Detail',
  components: {
    NavBar,
    Movie,
    Footer,
    Recommended
  },
  computed: mapState({
    item: state => (state as State).movie
  }),
  mounted () {
    this.fetchMovie(this.$route.params.id)
  },
  updated () {
    this.fetchMovie(this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'fetchMovie'
    ])
  }
})
</script>

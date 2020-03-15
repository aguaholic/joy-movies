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

import { mapActions, mapState, mapMutations } from 'vuex'
// eslint-disable-next-line no-unused-vars
import { State } from '../../store'
// eslint-disable-next-line no-unused-vars
import { Item } from '../../helpers/getItem'

export default Vue.extend({
  name: 'Home',
  components: {
    NavBar,
    List,
    Footer,
    Sorting
  },
  computed: mapState({
    items: state => (state as State).movies
  }),
  mounted () {
    this.fetchMovies()
  },
  methods: {
    ...mapActions([
      'fetchMovies'
    ]),
    ...mapMutations([
      'setMovies'
    ]),
    sorted (items: Item[]) {
      this.setMovies(items)
    }
  }
})
</script>

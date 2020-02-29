<template>
  <div class="home">
    <NavBar />
    <List v-bind:items="items"/>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '../NavBar.vue'
import List from './List.vue'

export default Vue.extend({
  name: 'Home',
    data() {
      return {
        items: [
          { title: 'A'},
          { title: 'B'},
          { title: 'C'},
          { title: 'D'},
          { title: 'E'}
        ]
      }
  },
  components: {
    NavBar,
    List,
  }
});
</script>

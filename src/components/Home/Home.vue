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
          { title: 'A', src:"https://picsum.photos/300/300/?image=20", rating:"10", releaseYear:"1988"},
          { title: 'B', src:"https://picsum.photos/300/300/?image=20", rating:"3", releaseYear:"1998"},
          { title: 'C', src:"https://picsum.photos/300/300/?image=20", rating:"5", releaseYear:"2008"},
          { title: 'D', src:"https://picsum.photos/300/300/?image=20", rating:"6", releaseYear:"2018"},
          { title: 'E', src:"https://picsum.photos/300/300/?image=20", rating:"8", releaseYear:"1978"}
        ]
      }
  },
  components: {
    NavBar,
    List,
  }
});
</script>

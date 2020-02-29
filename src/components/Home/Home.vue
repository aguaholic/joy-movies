<template>
  <div class="home">
    <NavBar />
    <list></list>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '../NavBar.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    NavBar,
  }
});
</script>

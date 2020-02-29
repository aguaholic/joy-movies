<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './components/Home/Home.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Home,
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100vw;
}
</style>

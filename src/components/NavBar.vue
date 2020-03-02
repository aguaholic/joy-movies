<template>
  <div class="navbar">
      <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Joy's movies</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  to="/">Home</b-nav-item>
      </b-navbar-nav> 
      </b-collapse>
      </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavBar',
});
</script>

<style scoped>
.bg-info  {
  background-color: #102E4A !important;
}
.navbar {
  position: fixed;
  top: 0;
  z-index: 1;
  padding: 0;
}

a {
      margin: 10px;
}

nav {
      width: 100%;
}
</style>
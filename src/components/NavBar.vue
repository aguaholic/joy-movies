<template>
    <div class="navbar">
        <b-navbar
            toggleable="lg"
            type="dark"
            variant="info"
        >
            <b-navbar-brand href="#">
                Joy's movies
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" />
            <b-collapse
                id="nav-collapse"
                is-nav
            >
                <b-navbar-nav>
                    <b-nav-item to="/">
                        Home
                    </b-nav-item>
                    <b-nav-item to="/random">
                        Random
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar'
})
</script>

<style scoped>
/* I had to use !important to override Bootstrap's style */
.bg-info  {
  background-color: #102E4A !important;
}
.navbar {
  position: fixed;
  top: 0;
  z-index: 1;
  padding: 0;
}
.navbar-dark .navbar-nav .nav-link {
  color: #c0c0c0 !important;
}
a {
  margin: 10px;
}
nav {
  width: 100%;
}
@media only screen and (max-width: 600px) {
  .navbar-toggler {
    margin-right: 10px;
  }
  .nav-item {
    border-bottom: .8px solid rgb(30,85,137, .3);
    background-color:  rgb(30,85,137, .1);
  }
  .nav-link {
    padding: 4px;
    margin: 5px 5px 5px 10px;
  }
}
</style>

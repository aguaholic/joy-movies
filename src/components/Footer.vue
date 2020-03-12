<template>
    <div class="footer">
        <div class="links">
            <router-link to="/">
                Home
            </router-link>
            <router-link to="/random">
                Random
            </router-link>
        </div>
        <div class="text">
            <p>© 2020 Joy's movies</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer'
})
</script>

<style scoped>
.footer {
    width: 100%;
    background-color: #102E4A;
    height: 100px;
    display: inline-flex;
    justify-content: space-between;
}
.links {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    justify-content: space-around;
}
.text {
    color: #C0C0C0;
    font-size: 10px;
    align-self: flex-end;
    padding: 20px 10px 0;
}
a:hover {
    color: #C0C0C0;
    text-decoration: none;
}
a {
    color: #C0C0C0;
}
</style>

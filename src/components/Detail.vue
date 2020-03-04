<template>
      <div>
            <NavBar />
            <div class="detail" v-bind:item="item" v-for="(movie, index) in item" v-bind:key="index">
                  <b-img v-bind:src="movie.src" fluid v-bind:alt="movie.title"></b-img>
                  <b-card class="card" v-bind:title="movie.title">
                        <b-row no-gutters>
                              <b-col md="6">
                                    <p>Release year: {{ movie.releaseYear}}</p>
                                    <p>Rating: {{ movie.rating }}</p>
                                    <p>Popularity: {{ movie.popularity }}</p>
                                    <p>Total revenue: {{ movie.revenue }}</p>
                                    <p>Total of votes: {{ movie.totalVotes }}</p>
                              </b-col>
                              <b-col md="6">
                                    <p> {{ movie.overview }}</p>
                              </b-col>
                        </b-row>
                        <Recommended/>
                  </b-card>
            </div>
            <Footer />
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'
import Recommended from './Recommended.vue'

import axios from 'axios'

import { getItem } from '../helpers/getItem'

export default Vue.extend({
      name: 'Detail',
      data() {
            return {
                  item: null
            }
      },
      components: {
            NavBar,
            Footer,
            Recommended,
      },
      methods: {
            fetchItem() {
                  axios.get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?api_key=a109923888458bdee8244628cbd0abb2&language=en-US')
                        .then(response => {
                              this.item = [response.data].map(item => getItem(item))
                        })
                        .catch(function (error) {
                              console.log(error);
                        })
                  }
      },
      mounted() {
            this.fetchItem()
      },
      updated() {
            this.fetchItem()
      }
});
</script>

<style scoped>
.detail {
      display: flex;
      flex-direction: column;
      padding: 40px;
      margin: 10px 15%;
      background-color: #F8F5EE;
}
@media only screen and (max-width: 600px) {
      .detail {
            padding: 0;
      }
}
img {
      margin: 0 auto 20px;
}
.card {
      padding: 0 20px;
}
.button {
      margin: auto;
      border-color: #102E4A;
      background-color: #102E4A;
}
</style>

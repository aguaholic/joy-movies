<template>
      <div>
            <NavBar />
            <div class="detail" v-bind:item="item" v-for="(movie, index) in item" v-bind:key="index">
                  <b-img v-bind:src="movie.src" fluid alt="Responsive image"></b-img>
                  <b-card class="card" v-bind:title="movie.title">
                        <b-row no-gutters>
                              <b-col md="6">
                                    <p>Release year: {{ movie.releaseYear}}</p>
                                    <p>Rating: {{ movie.rating }}</p>
                                    <p>Popularity: {{ movie.popularity }}</p>
                                    <p>Total revenue: {{ movie.revenue }}</p>
                                    <p>Total of votes: {{ movie.totalVotes }}</p>
                                    <p>Homepage: <a href="movie.homepage">{{ movie.homepage }}</a></p>
                              </b-col>
                              <b-col md="6">
                                    <p> {{ movie.overview }}</p>
                              </b-col>
                        </b-row>
                  </b-card>
            </div>
            <Footer />
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '../NavBar.vue'
import Footer from '../Footer.vue'

import axios from 'axios'

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
      },
      methods: {
            goBack() {
                  return this.$router.push("/")
            },
            fetchItem() {
                  axios.get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?api_key=a109923888458bdee8244628cbd0abb2&language=en-US')
                        .then(response => {
                              this.item = [response.data].map(movie => {
                                    if (movie.backdrop_path) {
                                          return {
                                                id: movie.id,
                                                src: 'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path, 
                                                title: movie.title,
                                                rating: movie.vote_average,
                                                releaseYear: movie.release_date,
                                                overview: movie.overview,
                                                popularity: movie.popularity,
                                                homepage: movie.homepage,
                                                revenue: movie.revenue,
                                                totalVotes: movie.vote_count,
                                          }
                                    }else if  (movie.poster_path){
                                          return { 
                                          id: movie.id,
                                          title: movie.title,
                                          src: 'https://image.tmdb.org/t/p/w500'+ movie.poster_path, 
                                          rating: movie.vote_average,
                                          releaseYear: movie.release_date,
                                          overview: movie.overview,
                                          popularity: movie.popularity,
                                          homepage: movie.homepage,
                                          revenue: movie.revenue,
                                          totalVotes: movie.vote_count,
                                          }
                                    }
                                    else {
                                          return { 
                                          id: movie.id,
                                          title: movie.title,
                                          src: null, 
                                          rating: movie.vote_average,
                                          releaseYear: movie.release_date
                                          }
                                    }
                              })
                              console.log(response.data, this.item)
                        })
                        .catch(function (error) {
                              console.log(error);
                        })
                  }
      },
      mounted() {
            this.fetchItem()
      },
});
</script>

<style scoped>
.detail {
      padding: 40px;
      margin: 10px 15%;
      background-color: #F8F5EE;
}
.card {
      padding: 0 20px;
}
</style>

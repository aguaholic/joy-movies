<template>
      <div class="recommended">
            <div v-for="(recItem, index) in recommendedItems" v-bind:key="index" v-on:click="showDetail($event, recItem)" >
                  <b-card
                        v-bind:title="recItem.title"
                        v-bind:img-src="recItem.src" 
                        v-bind:alt="recItem.title"
                        img-top
                        tag="article"
                        style="max-width: 15rem;"
                        class="mb-2"
                  >
                  </b-card>
            </div> 
      </div>
</template>

<script lang="ts">
import Vue from 'vue'

import axios from 'axios'

export default Vue.extend({
      name: 'Recommended',
      data() {
            return {
                  recommendedItems: null,
            }
      },
      methods: {
            fetchRecommended() {
                  axios.get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '/recommendations?api_key=a109923888458bdee8244628cbd0abb2&language=en-US&page=1')
                        .then(response => {
                              this.recommendedItems = response.data.results
                              .slice(0, 3)
                              .map(item => {
                                     if (item.backdrop_path) {
                                          return {
                                                id: item.id,
                                                src: 'https://image.tmdb.org/t/p/w500'+ item.backdrop_path, 
                                                title: item.title,
                                                rating: item.vote_average,
                                                releaseYear: item.release_date,
                                                overview: item.overview,
                                                popularity: item.popularity,
                                                revenue: item.revenue,
                                                totalVotes: item.vote_count,
                                          }
                                    } else if (item.poster_path){
                                          return { 
                                          id: item.id,
                                          title: item.title,
                                          src: 'https://image.tmdb.org/t/p/w500'+ item.poster_path, 
                                          rating: item.vote_average,
                                          releaseYear: item.release_date,
                                          overview: item.overview,
                                          popularity: item.popularity,
                                          revenue: item.revenue,
                                          totalVotes: item.vote_count,
                                          }
                                    } else {
                                          return { 
                                          id: item.id,
                                          title: item.title,
                                          src: null, 
                                          rating: item.vote_average,
                                          releaseYear: item.release_date,
                                          overview: item.overview,
                                          popularity: item.popularity,
                                          revenue: item.revenue,
                                          totalVotes: item.vote_count,
                                          }
                                    }
                              })
                              console.log("Recommended",  this.recommendedItems, this.item.id)
                        })
                        .catch(function (error) {
                              console.log(error);
                        })
                  },
            showDetail(e, item) {
                  this.$router.push({ name: 'detail', params: { id: item.id }})
            },
      },
      mounted() {
            this.fetchRecommended()
      },
      updated() {
            this.fetchRecommended()
      }
});
</script>

<style scoped>
      .recommended {
            width: 100%;
            display: inline-flex;
            justify-content: space-between;
      }
      @media only screen and (max-width: 600px) {
            .recommended {
                  flex-direction: column;
            }
      }
      img:hover {
            cursor: pointer;
      }
      h4 {
            text-align: center;
            }
</style>

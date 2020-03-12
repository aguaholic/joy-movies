<template>
    <div>
        <NavBar />
        <div
            v-if="item"
            class="detail"
        >
            <b-img
                :src="item.src"
                fluid
                :alt="item.title"
            />
            <b-card
                class="card"
                :title="item.title"
            >
                <b-row no-gutters>
                    <b-col md="6">
                        <p>Release year: {{ item.releaseYear }}</p>
                        <p>Rating: {{ item.rating }}</p>
                        <p>Popularity: {{ item.popularity }}</p>
                        <p>Total revenue: {{ item.revenue }}</p>
                        <p>Total of votes: {{ item.totalVotes }}</p>
                    </b-col>
                    <b-col md="6">
                        <p> {{ item.overview }}</p>
                    </b-col>
                </b-row>
                <Recommended />
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

// eslint-disable-next-line no-unused-vars
import { getItem, Item } from '../helpers/getItem'
import { apiKey, apiRoot } from '../constants'

interface Data {
  item: null | Item
}

export default Vue.extend({
  name: 'Detail',
  components: {
    NavBar,
    Footer,
    Recommended
  },
  data (): Data {
    return {
      item: null
    }
  },
  mounted () {
    this.fetchItem()
  },
  updated () {
    this.fetchItem()
  },
  methods: {
    fetchItem () {
      axios.get(apiRoot + 'movie/' + this.$route.params.id + '?api_key=' + apiKey + '&language=en-US')
        .then(response => {
          this.item = getItem(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
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

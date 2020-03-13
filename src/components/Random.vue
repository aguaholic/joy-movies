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
                <b-button @click="fetchItem">
                    Try it again
                </b-button>
            </b-card>
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './NavBar.vue'
import Footer from './Footer.vue'

import { randomItem } from '../helpers/randomItem'
// eslint-disable-next-line no-unused-vars
import { getItem, Item } from '../helpers/getItem'

interface Data {
  item: null | Item
}

export default Vue.extend({
  name: 'Random',
  components: {
    NavBar,
    Footer
  },
  data (): Data {
    return {
      item: null
    }
  },
  mounted () {
    this.fetchItem()
  },
  methods: {
    fetchItem () {
      randomItem()
        .then((item) => {
          this.item = item
        }).catch(() => {
          // This function is going to fail sometimes because some of the ids don't exist
          // anymore or are adult movies(which are blocked in randomItem).
          // If it fails, it calls fetchItem again, so there is always an available movie to
          // be shown in the page.
          this.fetchItem()
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
.btn-secondary {
      margin: auto;
      border-color: #102E4A;
      background-color: #102E4A;
      border-radius: 0;
}
@media only screen and (max-width: 600px) {
      .btn-secondary {
            margin: auto;
      }
}
</style>

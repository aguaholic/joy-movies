<template>
    <div
        class="movie"
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
            <slot />
        </b-card>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

// eslint-disable-next-line no-unused-vars
import { Item } from '../helpers/getItem'

export default Vue.extend({
  name: 'Movie',
  props: {
    item: {
      type: Object as () => Item,
      required: true
    }
  }
})
</script>

<style scoped>
.movie {
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin: 10px 15%;
  background-color: #F8F5EE;
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
@media only screen and (max-width: 600px) {
  .movie {
    padding: 5px;
    margin: 0 5%;
  }
  .card {
    padding: 0;
  }
}
</style>

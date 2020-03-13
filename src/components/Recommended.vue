<template>
    <div>
        <h4>Recommended for you</h4>
        <div class="recommended">
            <div
                v-for="(recItem, index) in recommendedItems"
                :key="index"
                @click="showDetail($event, recItem)"
            >
                <b-card
                    :title="recItem.title"
                    :img-src="recItem.src"
                    :alt="recItem.title"
                    img-top
                    tag="article"
                    style="max-width: 15rem;"
                    class="mb-2"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

import axios from 'axios'

// eslint-disable-next-line no-unused-vars
import { getItem, ResponseItem, Item } from '../helpers/getItem'
import { apiKey, apiRoot } from '../constants'

export default Vue.extend({
  name: 'Recommended',
  data () {
    return {
      recommendedItems: null
    }
  },
  mounted () {
    this.fetchRecommended()
  },
  updated () {
    this.fetchRecommended()
  },
  methods: {
    fetchRecommended () {
      axios.get(apiRoot + 'movie/' + this.$route.params.id + '/recommendations?api_key=' + apiKey + '&language=en-US&page=1')
        .then(response => {
          this.recommendedItems = response.data.results
            .slice(0, 3)
            .map((item: ResponseItem) => getItem(item))
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    showDetail (e: Event, item: Item) {
      this.$router.push({ name: 'detail', params: { id: item.id } })
    }
  }
})
</script>

<style scoped>
.recommended {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
img:hover {
  cursor: pointer;
}
h4 {
  margin-bottom: 12px;
}
@media only screen and (max-width: 600px) {
  .recommended {
    flex-direction: column;
    margin: 0 auto;
  }
  /* this !important is here because Bootstrap added an inline style in this class */
  article.card.mb-2 {
    max-width: 100% !important;
  }
}
</style>

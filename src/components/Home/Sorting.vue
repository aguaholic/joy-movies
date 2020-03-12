<template>
    <div class="background">
        <div class="sorting">
            <p>sort by rating</p>
            <b-button @click="sortItemsUp">
                high to low
            </b-button>
            <b-button @click="sortItemsDown">
                low to high
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sorting',
  props: {
    items: {
      type: Array,
      default: null
    },
    onSort: {
      type: Function,
      default: null
    }
  },
  methods: {
    sortItemsUp () {
      const items = [...this.items]
      const sortedRating = items.sort((a, b) => b.rating - a.rating)
      this.onSort(sortedRating)
    },
    sortItemsDown () {
      const items = [...this.items]
      const sortedRating = items.sort((a, b) => a.rating - b.rating)
      this.onSort(sortedRating)
    }
  }
})
</script>

<style scoped>
.btn-secondary {
      border-color: #102E4A;
      background-color: #102E4A;
      padding: 4px 2px;
      margin: 0 3px;
      border-radius: 0;
}
@media only screen and (max-width: 600px) {
      .btn-secondary {
            font-size: 10px;
      }
}
.sorting {
      display: inline-flex;
      width: 96%;
      justify-content: flex-end;
      padding: 5px;
}
.background {
      margin: 10px 15% 0;
      background-color: #F8F5EE;
}
p {
      margin: 5px 5px 0;
}
@media only screen and (max-width: 600px) {
      p {
            font-size: 10px;
      }
}
</style>

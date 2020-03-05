<template>
      <div>
            <b-button v-on:click="sortItems">Sort by Popularity</b-button>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
      name: 'Sorting',
      props: {
            items: Array,
            onSort: Function,
      },
      methods: {
           sortItems() {
                  const items = [...this.items]
                  const sortedRating = items.sort((a, b) => b.rating - a.rating)
                  this.onSort(sortedRating)
            }
      },
});
</script>

<style scoped>
.btn-secondary {
      margin: auto;
      border-color: #102E4A;
      background-color: #102E4A;
}
</style>

<template>
    <div class="list">
        <ul>
            <ListItem
                v-for="(item, index) in items"
                :key="index"
                :item="item"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListItem from './ListItem.vue'

export default Vue.extend({
  name: 'List',
  components: {
    ListItem
  },
  props: {
    items: {
      type: Array,
      default: null
    }
  }
})
</script>

<style>
ul {
  list-style: none;
  padding: 0;
}
.list {
  padding: 5px 40px 40px;
  margin: 0 15% 10px;
  background-color: #f8f5ee;
}
</style>

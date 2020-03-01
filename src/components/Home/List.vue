<template>
  <div class="list">
        <ul>
            <ListItem v-for="(item, index) in items" v-bind:key="index" v-bind:item="item" ></ListItem>
        </ul>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import ListItem from './ListItem.vue'

export default Vue.extend({
  name: 'List',
  components: {
        ListItem,
  },
  props: {
      items: Array
  },
});
</script>

<style>
ul {
      list-style: none;
      padding: 0;
}
.list {
      padding: 40px;
      margin: 10px 15%;
      background-color: #F8F5EE;
}
</style>


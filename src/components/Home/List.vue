<template>
  <div class="list">
        <ul>
              <li v-for="(item, index) in items" v-bind:key="index">
                    <p >title: {{ item.title }}</p>
              </li>
        </ul>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'List',
  props: {
      items: Array
  },
  components: {
        
  }
});
</script>

<style>
.list {
      padding: 40px;
      margin: 10px 15%;
      background-color: #F8F5EE;
}
</style>


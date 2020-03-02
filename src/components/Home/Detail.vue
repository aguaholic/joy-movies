<template>
      <div class="detail">
            <img />
            <div>text</div>
      </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Detail',
  props: {
      item: Object
  },
});
</script>

<template>
      <div class="detail">
            <b-card-img src="item.src" class="rounded-0" img-alt="item.title"></b-card-img>
            <b-card title="item.title" sub-title="Card subtitle">
            <b-card-text>
                  <p>Release year:</p>
                  <p>Release year:</p>
            </b-card-text>
            <b-card-text>
                  <p>text</p>
            </b-card-text>
            </b-card>
      </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
      name: 'Detail',
      props: {
            item: Object,
      },
});
</script>

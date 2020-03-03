<template>
      <li class="list-item" v-on:click="showDetail">
            <b-card no-body class="overflow-hidden">
                  <b-row no-gutters>
                        <b-col md="4">
                              <b-card-img v-bind:src="item.src" class="rounded-0" v-bind:img-alt="item.title"></b-card-img>
                        </b-col>
                        <b-col md="8">
                              <b-card-body v-bind:title="item.title">
                                    <b-card-text>
                                          <p>Rating: {{ item.rating }}</p>
                                          <p>Release year: {{ item.releaseYear }}</p>
                                    </b-card-text>
                              </b-card-body>
                        </b-col>
                  </b-row>
            </b-card>
      </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
      name: 'ListItem',
      props: {
            item: Object
      },
      methods: {
            showDetail() {
                  return this.$router.push({ name: 'detail', params: { id: this.item.id }})
            }
      }
});
</script>

<style>
      .list-item {
            margin-bottom: 10px;
      }
      li:hover {
            cursor: pointer;
      }
</style>

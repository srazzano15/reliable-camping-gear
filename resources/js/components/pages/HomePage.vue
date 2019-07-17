<template>
  <b-container fluid class="px-0 mt-2 white">
    <b-row no-gutters>
      <b-col md="2">
        <partners></partners>
      </b-col>
      <b-col md="8">

      </b-col>
      <b-col md="2">
        <news-events></news-events>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { partners } from "../layout/Partners";
import { newsEvents } from "../layout/NewsEvents"

export default {
  
}
</script>

<style scoped>
  .white {
    background-color: white;
  }
</style>

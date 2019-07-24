<template>
  <b-container fluid class="px-0 mt-2 white">
    <b-row no-gutters>
      <b-col md="2">
        <partners></partners>
      </b-col>
      <b-col md="8">
        <b-row>
          <b-col>
            <h2 class="mt-2 section__header text-center">Testimonials</h2>
            <testimonials></testimonials>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="2">
        <news-events></news-events>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { partners } from "../layout/Partners";
import { newsEvents } from "../layout/NewsEvents";
import { homeCarousel } from "../layout/HomeCarousel"
import { testimonials } from "../layout/Testimonials"
 
export default {
  
}
</script>

<style scoped>
  .white {
    background-color: white;
  }
  .section__header {
    font-weight: 600;
    font-size: 2.5em;
    text-transform: uppercase
  }
  
</style>

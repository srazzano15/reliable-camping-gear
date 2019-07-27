<template>
  <b-container fluid class="px-0 white">
    <b-row>
      <b-img
        fluid 
        height="500" 
        src="/assets/images/jumbotron/stock_zion_natl_1000.jpg"
        class="w-100"
      ></b-img>
    </b-row>
    <b-row align-h="center">
      <h2 class="my-3 rcg__header w-25 text-center mx-auto">{{ header }}</h2>
      <rcg-team></rcg-team>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      header: 'Meet the Team',
      
    }
  }
}
</script>

<style>

</style>

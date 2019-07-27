<template>
  <b-container fluid class="px-0 white">
    <b-row>
      <b-img
        src="/assets/images/jumbotron/stock_monmt_valley_1500x400.jpg"
        height="400"
        class="w-100"
        fluid
      ></b-img>
    </b-row>
    <b-row align-h="center">
      <h2 class="mt-5 mb-3 rcg__header w-25 text-center mx-auto">{{ header }}</h2>
      <testimonials></testimonials>
    </b-row>
  </b-container>
</template>


<script>


export default {
  data() {
    return {
      header: 'Testimonials'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

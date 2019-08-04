<template>
  <b-modal 
    id="mat-weight-modal"
    size="lg"
    body-bg-variant="dark"
    hide-header
    ok-only
    ok-title="Close"
    footer-bg-variant="dark"
    footer-class="rcg__product_modal"
    ok-variant="rcg-blue"
  >
    <b-carousel
      id="mat-weight-carousel"
      v-model="slide"
      width="450"
      controls
      indicators
    >
      <b-carousel-slide 
        :img-src="image.src"
        v-for="image in images"
        :key="image.id"
      >
      </b-carousel-slide>
    </b-carousel>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      images: [
        {
          src: '/assets/images/products/mat_weight_1_450x450.png'
        },
        {
          src: '/assets/images/products/mat_weight_2_450x450.png'
        },
        {
          src: '/assets/images/products/mat_weight_1_450x450.png'
        },
        {
          src: '/assets/images/products/mat_weight_2_450x450.png'
        },
      ]
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>

<style>

</style>

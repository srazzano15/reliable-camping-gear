<template>
  <b-carousel
    id="productCarousel"
    controls
    indicators
    background="#fff"
    img-height="480"
    img-width="900"
    v-model="slide"
    style="text-shadow: 1px 1px 2px #333; text-align: center"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      v-for="(slide, i) in slides"
      :key="i"
      :id="slide.id"
      :img-src="slide.img"
      :img-alt="slide.alt"
      :caption="slide.caption"
      :text="slide.subCaption"
      class="w-auto"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        slides: [
          {
            caption: 'Camping Chair Utility Weight',
            subCaption: 'Handy weight to keep your chair planted in inclement weather!',
            img: '/assets/images/products/Camp Chair_hgt_480.jpg',
            alt: 'Camping chair with weight for windy bad weather',
            id: 'chairWeightOne',
            width: '900'
          },
          {
            caption: 'RV Antenna Tripod Utility Weight',
            subCaption: 'Park your RV on cement? Our Tripod Utility Weight is perfect for you!',
            img: '/assets/images/products/antenna_tripod_utility_weight_hgt_480.jpg',
            alt: 'RV camping antenna useful on cement or hard dirt',
            id: 'antennaWeightOne',
            width: '321'
          },
          {
            caption: 'RV Antenna Tripod Utility Weight',
            subCaption: 'Park your RV on cement? Our Tripod Utility Weight is perfect for you!',
            img: '/assets/images/products/Tripod tall_hgt_480.jpg',
            alt: 'RV camping antenna useful on cement or hard dirt',
            id: 'antennaWeightTwo',
            width: '480'
          }
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

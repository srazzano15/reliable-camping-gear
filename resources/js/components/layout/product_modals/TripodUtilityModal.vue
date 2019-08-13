<template>
  <b-modal 
    id="tripod-trashcan-modal"
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
      id="tripod-trashcan-carousel"
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
          src: '/assets/images/products/mat_weight_2_450x450.png'
        },
        {
          src: '/assets/images/products/mat_weight_1_450x450.png'
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
    },
    /*sendEmail() {
      curl --request POST \
      --url https://api.sendgrid.com/v3/mail/send \
        --header 'authorization: Bearer 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' \
        --header 'content-type: application/json' \
          --data '{"personalizations":[{"to":[{"email":"ibachn24@gmail.com","name":"Nikki Ibach"}],"subject":"How I would do this..."}],"content": [{"type": "text/plain", "value": "Sending email in your name, on your behalf. Crazy huh?"}],"from":{"email":"ibachn24@gmail.com","name":"Nicole Caitlin Ibach"},"reply_to":{"email":"ibachn24@gmail.com","name":"Nicole Caitlin Ibach"}}'
    }*/
  }
}
</script>
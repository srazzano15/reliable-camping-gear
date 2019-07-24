<template>
  <ul class="list-unstyled m-3">
    <b-media 
      tag="li"
      v-for="(item, i) in testimonials"
      :key="i"
      :right-align="item.alignRight"
      class="p-3 testimonial__custom"
    >
      
        <b-img
          slot="aside"
          width="250"
          height="auto"
          :src="item.img"
      ></b-img>
      

      
        <blockquote class="blockquote mb-0">
          <p>{{ item.body }}</p>
          <footer class="blockquote-footer">
            <cite>{{ item.citation }}</cite>
          </footer>
        </blockquote>
     

    </b-media>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          body: `What a great idea! Anyone who has spent time at all RVing knows 
          what havoc the wind plays on your mat and other camp items. 
          When you get this up and running, we will surely be a customer!`,
          citation: `Steve & Trish Browder - Apple Valley, CA`,
          img: '/assets/images/testimonial/testimonial1.jpg',
          alignRight: false
        },
        {
          body: `What a great idea! Anyone who has spent time at all RVing knows 
          what havoc the wind plays on your mat and other camp items. 
          When you get this up and running, we will surely be a customer!`,
          citation: `Steve & Trish Browder - Apple Valley, CA`,
          img: '/assets/images/testimonial/testimonial1.jpg',
          alignRight: true
        }
      ],
    }
  },
  
}
</script>

<style>
  .testimonial__custom {
    border-top: 1px solid lightgray
  }
</style>

<template>
  <ul class="list-unstyled m-3 rcg__pad--h-8">
    <b-media 
      tag="li"
      v-for="(item, i) in products"
      :key="i"
      :right-align="item.right"
      class="p-3 rcg__media__list--main"
      vertical-align="center"
    >      
      <b-img
        slot="aside"
        width="250"
        height="auto"
        :src="item.img"
      ></b-img>
      
      <b-media-body class="px-4">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </b-media-body>
    </b-media>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          title: 'Tripod Weight',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          img: '/assets/images/products/Tripod tall_hgt_480.jpg',
          alt: 'Item image',
          slug: '',
          right: false,
        },
        {
          title: 'Corner Weight',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          img: '/assets/images/products/Tripod tall_hgt_480.jpg',
          alt: 'Item image',
          slug: '',
          right: true,
        },
        {
          title: 'Trash Can Weight',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          img: '/assets/images/products/Tripod tall_hgt_480.jpg',
          alt: 'Item image',
          slug: '',
          right: false,

        }
      ],
    }
  }
}
</script>


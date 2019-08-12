<template>
  <div class="m-3 rcg__pad--h-15">
    <b-card
      v-for="product in products"
      :key="product.id"
      :img-src="product.href"
      class="p-4 mb-3"
    >
      <b-card-footer 
        footer-bg-variant="transparent"
        footer-class="d-flex justify-content-around px-0"
      >
        <b-button
          href="#"
          class="flex-grow-1 mx-2"

        >Button 1</b-button>

        <b-button 
          href="#"
          class="flex-grow-1 mx-2"
        >Button 2</b-button>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [        
        {
          href: 'assets/images/products/Rugs Stay Down 2019 (1)-1.png'
        },
        {
          href: 'assets/images/products/Reliable Camping Gear Trash Can - Utiity Final Aug 4 (1)-1.png'
        }        
      ]
    }
  },
  methods: {
    downloadPdf(document) {
      let doc = document

      
    }
  }
}
</script>

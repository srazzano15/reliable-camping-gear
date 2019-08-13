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
          class="flex-grow-1 mr-3"
          variant="rcg-purple"
          size="lg"
          v-b-modal="product.modal"
        >{{ buttons[0] }}</b-button>

        <b-button
          variant="rcg-purple"
          :href="product.filePath" 
          :download="product.filename" 
          class="flex-grow-1 ml-3"
          size="lg"
        >{{ buttons[1] }}</b-button>
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
          href: 'assets/images/products/Rugs Stay Down 2019 (1)-1.png',
          filename: 'RCG_Rugs_Stay_Down_Infodoc_2019.pdf',
          filePath: 'assets/pdf/Rugs Stay Down 2019.pdf',
          id: 'rug-stay-down',
          modal: 'mat-weight-modal'
        },
        {
          href: 'assets/images/products/Reliable Camping Gear Trash Can - Utiity Final Aug 4 (1)-1.png',
          filename: 'RCG_Tripod_Trashcan_Utility_Infodoc_2019.pdf',
          filePath: 'assets/pdf/Reliable Camping Gear Trash Can - Utiity Final Aug 4.pdf',
          id: 'utility-weight',
          modal: 'tripod-trashcan-modal'
        }    
      ],
      buttons: [
        'Open Gallery',
        'Download PDF'
      ]
    }
  },
  methods: {
    openModal(id) {
      this.$bvModal.show(id)
    }
  }
}
</script>

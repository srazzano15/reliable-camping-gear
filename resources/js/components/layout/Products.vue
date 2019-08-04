<template>
  <div 
    role="tablist"
    class="m-3 rcg__pad--h-8 py-4"
  >
    <b-card 
      no-body
      class="mb-2 overflow-hidden"
      :key="product.id"
      v-for="product in products"
    >
      <b-card-header 
        header-tag="header"
        class="p-0 rounded-0"
        role="tab"
      >
        <b-button
          squared
          block 
          :class="product.isCollapsed ? 'collapsed' : null"
          :aria-expanded="product.isCollapsed ? 'true': 'false'"
          :aria-controls="product.id"
          @click="product.isCollapsed = !product.isCollapsed"
          class="rcg__btn--custom rounded-0"
          size="lg"
        >{{ product.title }}</b-button>
      </b-card-header>

      <b-collapse 
        :id="product.id"
        accordion="product-accordion"
        role="tabpanel"
        class="mt-3"
        v-model="product.isCollapsed"
      >
      <b-row no-gutters>
        <b-col md="4 d-flex align-items-center">
          <b-card-img 
            :src="product.img"
            :alt="product.alt"
            class="rounded-0 p-3 m-2"
          ></b-card-img>
        </b-col>
        <b-col md="8 d-flex flex-column justify-content-center">
          <b-card-title 
            :title="product.title" 
            class="pt-3 pl-3"
            title-tag="h3"
          ></b-card-title>

          <b-card-sub-title 
            :sub-title="product.sku"
            class="pl-3"
          ></b-card-sub-title>

          <b-card-body class="px-3">
            <b-card-text>
              {{ product.description }}
            </b-card-text>
            <b-card-text
              v-for="value in product.body"
              :key="value.id"
              class="rcg__paragraph font-weight-bolder"
            >
              {{ value }}
            </b-card-text>
            
            <div class="w-100 d-flex flex row justify-content-end align-items-center">
              <b-button 
                href="#" 
                class="rcg__btn--custom"
                variant="rcg-purple"
                v-b-modal="'mat-weight-modal'"
              >Open Gallery</b-button>
              <b-link class="ml-3 rcg__paragraph">Download Sheet</b-link>
            </div>

          </b-card-body>



        </b-col>
      </b-row>
        
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          title: 'Reliable RV Patio Mat Weight',
          description: `The Reliable RV Patio Mat Stays system is designed to secure 
          and stabilize RV Patio Mats.  Patent Pending, Reliable RV Patio Mat Stays and 
          our under RV Patio Mat attachment process provides unparalleled flexibility for 
          millions of RV Patio Mat owners. Each package contains the RV Patio Mat Stays and the 
          attachment directions and materials to easily and quickly secure your existing 
          or new RV Patio Mats.  Our designs support durable, waterproof and low profile fabric 
          types such as Codura, Outtertex, Black Duck brands and fabrics`,
          img: '/assets/images/products/Pic 6 - Rug Stay.jpg',
          alt: 'RV rug and patio carpet mat weight stay holder',
          slug: '',
          id: 'corner-weight',
          isCollapsed: true,
          sku: 'SKU: RCG – RVRUG- WGT',
          body: {
            sectionOne: `Reliable RV Patio Mat Stays = 16 lbs. – expandable to 32 lbs – Steel shot tested`,
            sectionTwo: `Includes: 5 - 6” Zip Ties`,
            sectionThree: `Size: 6” x 36” x 36” – Sewn into the external sleeve are  15” pockets where  4 -  5” x 12’’ 4ml Poly Bags w 4Lb. Ea. Sealed coated Steel Shot`,
            sectionFour: `Sold in a two (2) pack`
          }
        },
        {
          title: 'Tripod Weight',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          img: '/assets/images/products/Tripod tall_hgt_480.jpg',
          alt: 'Item image',
          slug: '',
          id: 'tripod-weight',
          isCollapsed: false,
          sku: ''
        },
        {
          title: 'Trash Can Weight',
          description: 'This card has supporting text below as a natural lead-in to additional content.',
          img: '/assets/images/products/Tripod tall_hgt_480.jpg',
          alt: 'Item image',
          slug: '',
          id: 'trashcan-weight',
          isCollapsed: false
        }
      ],
    }
  },
  methods: {
    toggle(p) {
      p = !p
    }
  }
}
</script>


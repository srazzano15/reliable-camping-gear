<template>
  <div class="m-3 rcg__pad">
    <b-card
      v-for="product in products"
      :key="product.id"
      :img-src="product.href"
      class="p-4 mb-3"
    >
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          href: 'assets/images/products/Reliable Camping Gear Trash Can - Utiity Final Aug 4 (1)-1.png'
        },
        {
          href: 'assets/images/products/Rugs Stay Down 2019 (1)-1.png'
        }
      ]
    }
  }
}
</script>

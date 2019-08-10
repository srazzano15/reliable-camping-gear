<template>
  <b-container fluid class="pt-3 white">
    <b-row align-h="center">
      <h2 class="mt-5 mb-3 rcg__header w-25 text-center mx-auto">{{ sectionHeaders.story }}</h2>
      <p
        class="text-break mb-5 rcg__paragraph rcg__pad--h-8 text-center"
        v-for="(item, i) in sections"
        :key="i"
      >{{ item.paragraph }}</p>
    </b-row>

    <b-row align-h="center">
      <b-col>
        <h2 class="mt-5 mb-3 rcg__header w-25 text-center mx-auto">{{ sectionHeaders.product }}</h2>
          <new-products></new-products>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
 
export default {
  data() {
    return {
      sectionHeaders: {
        product: 'Products',
        story: 'Our Story'
      },
      sections: [
        {
          paragraph: `Our co-founder Doug Razzano and son were camping 
          and fishing at Lee's Ferry, Arizona in 2018. In the early morning, 
          prior to sunrise and excitement to get to a fly fishing spot, 
          Doug accidentally kicked the previously placed three-pound rock 
          off the RV Patio Mat corner which caused a fall, a black and 
          blue toe and in the following weeks the loss of that toenail. Not kidding.`
        },
        {
          paragraph: `In April 2019 Reliable Camping Gear was founded on 
          a windy morning with co-founder Jeff Davis at an RV site, when 
          a gust of wind lifted the Patio Mat, threw the placed rocks, 
          tossed the chairs as we witnessed the trash can rolling away. 
          We just looked at each other and said there has to be a better 
          way to have the "Rugs Stay Down."  At that moment, we agreed 
          to start a company focused on building safe and secure products 
          to prevent injuries and damage while camping.`
        },
        {
          paragraph: `That morning we started measuring, sketching, and 
          crafting the initial Rugs Stay Down design, our Trash Can and 
          Utility weighting products. The burst of creativity was partly 
          enhanced, possibly by Bloody Marys.`
        }
      ]
    }
  }
}
</script>

<style scoped>
  .white {
    background-color: white;
  }  
</style>

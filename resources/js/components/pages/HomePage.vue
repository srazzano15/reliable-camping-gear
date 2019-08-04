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
          <products></products>
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
          paragraph: `Our company was created base upon a RV camping injury. 
          Our co-founder Doug Razzano and son Steve where camping at Lee's Ferry, Arizona in 2018. 
          In the early morning excitement to go fly fish Doug accidentally kicked a placed three pound 
          rock off the Patio Mat corner which caused a black and blue big toe and in the following weeks 
          the loss of that toe nail. Not kidding.`
        },
        {
          paragraph: `In April 2019 Reliable Camping Gear was created on a windy
          morning with co-founder Jeff Davis at an RV site when a gust of wind lifted 
          the Patio Mat, threw the placed rocks, tossed the camp chairs and witnessed the 
          trash can rolling away.  We just looked at each other and said, there has to be a 
          better way to have the "Rugs Stay Down".`
        },
        {
          paragraph: `That morning we started measuring, sketching and crafting the initial 
          Rug Stay Down offering, the Trash Can utility weight and, the RV Antenna Tripod 
          product ideas. This burst of creativity was partly due to a few Bloody Marys that morning.`
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

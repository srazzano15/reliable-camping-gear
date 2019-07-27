<template>
  <ul class="list-unstyled rcg__pad--h-5">
    <b-media 
      tag="li"
      vertical-align="center"
      v-for="(member, i) in members"
      :key="i"
      class="p-4 rcg__media__list--main"
      :right-align="member.right"
    >
      <b-img
        slot="aside"
        blank
        :blank-color="member.img"
        width="250"
        height="350"
      ></b-img>

      <b-media-body class="px-4">
        <h3>{{ member.name }}</h3>
        <h5>{{ member.title }}</h5>
        <p class="text-break">{{ member.bio }}</p>
      </b-media-body>
    </b-media>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'Doug Razzano',
          title: 'Co-Founder',
          bio: `A Co-Founder and a product designer. Doug is a startup 
          entrepreneur and has years of experience licensing solutions to 
          technology vendors. Doug is an experienced camper, RV owner, 
          outdoor enthusiast, hunter and fisherman. Doug owns sales, 
          licensing and manages the business side of the manufacturing 
          relationships at Reliable Camping Gear.`,
          right: false,
          img: '#abc'
        },
        {
          name: 'Jeff Davis',
          title: 'Co-Founder',
          bio: `A Co-Founder and runs the engineering, product quality and 
          is a product designer. Jeff brings broad experience of over 
          thirty years of camping, NASCAR, marine and RVing expertise. 
          He has rebuilt RV's from the frame up and growing up in the Central 
          US has camped in tornadoes, microbursts and understands how 
          inclement weather affects the camping experience. Jeff owns 
          product design, market category, use case viability and the 
          manufacturer relationships for products at Reliable Camping Gear.`,
          right: true,
          img: '#cba'
        }
      ]
    }
  }
}
</script>


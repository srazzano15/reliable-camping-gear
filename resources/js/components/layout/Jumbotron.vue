<template>
	<b-container fluid class="px-0">
		<b-carousel
			v-model="slide"
			id="jumbotron"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
			indicators
			fade
			
		>
			<b-carousel-slide
				v-for="(slide, i) in slides"
				:key="i"
				:img-src="slide.src"
				img-height="480"
			></b-carousel-slide>
		</b-carousel>
	</b-container>
</template>

<script>
export default {
	data() {
		return {
			slide: 0,
			sliding: null,
			slides: [
				{
					src: '/assets/images/jumbotron/airstream_with_view_1500x300.png'
				},
				{
					src: '/assets/images/jumbotron/canadian_snowcap_1500x300.png'
				},
				{
					src: '/assets/images/jumbotron/desert_sunset_1500x300.png'
				},
				{
					src: '/assets/images/jumbotron/dirt_road_1500x300.png'
				},
				{
					src: '/assets/images/jumbotron/pink_flowers_1500x300.png'
				}
			]
		}
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		}
	}
}
</script>

<style lang="scss" scoped>
	.jumbotron {
		border-radius: 0;
	}
	
</style>

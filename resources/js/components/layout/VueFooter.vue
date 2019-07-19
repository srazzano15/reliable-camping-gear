<template>
	<b-container 
		fluid
		class="bg-dark mt-3"
	>
		<b-navbar>
			<b-nav vertical>
				<b-nav-item>Active</b-nav-item>
				<b-nav-item>Link</b-nav-item>
				<b-nav-item>Another Link</b-nav-item>
				<b-nav-item>Disabled</b-nav-item>
			</b-nav>
		</b-navbar>
		<b-row></b-row>
	</b-container>
</template>

<script>

import moment from 'moment'

export default {
	data() {
		return {
			year: moment().year(),
			links: [
				{
					text: 'FAQs',
					href: '#'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
	.nav-link {
		color: var(--rcg-green);

		&:hover {
			text-decoration: underline
		}
	}
</style>


<template>
	<b-container fluid class="bg-dark py-3">
		<b-row
			align-v="center"
			align-h="around"
		>
			<b-col 
				cols="4"
				class="d-flex justify-content-center"
			>
				<b-nav vertical>
				<b-nav-item v-for="(link, i) in links" :key="i" :href="link.href">{{
					link.text
				}}</b-nav-item>
			</b-nav>
			</b-col>

			<b-col 
				cols="4"
				class="d-flex justify-content-center"
			>
				<b-img :src="brandLogo" class="footer__logo my-4"></b-img>
			</b-col>

			<b-col 
				cols="4"
				class="d-flex justify-content-center"
			>
				<b-form-group
					id="newsletter-signup"
					label="Sign up to receive current news and events from the RCG Team!"
					label-for="newsletter-signup"
					class="text-rcg-green"
				>
					<b-form-input
						v-model="signupEmail"
						placeholder="Enter email"
						type="email"
						class="w-75"
					></b-form-input>
					<b-button class="w-25 h-25 align-self-center mt-2" variant="rcg-blue">Submit</b-button>
				</b-form-group>
			</b-col>
		</b-row>

		<b-row> </b-row>
	</b-container>
</template>

<script>
	import moment from "moment";

	export default {
		props: ["brandLogo"],
		data() {
			return {
				year: moment().year(),
				links: [
					{
						text: "Company",
						href: "#"
					},
					{
						text: "Testimonials",
						href: "#"
					},
					{
						text: "Contact",
						href: "#"
					}
				],
				signupEmail: ""
			};
		}
	};
</script>

<style lang="scss" scoped>
.nav-link {
	color: var(--rcg-green);

	&:hover {
		text-decoration: underline;
	}
}
.footer__logo {
	height: 10em !important;
}
</style>


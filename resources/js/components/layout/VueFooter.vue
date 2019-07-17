<template>
	<footer class="footer py-2 d-flex justify-content-center">
		<span>Developed and Maintained by Stephen Razzano - {{ year }}</span>
	</footer>
</template>

<script>

import moment from 'moment'

export default {
	data() {
		return {
			year: moment().year()
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
	max-height: 64px;
	z-index: 0;
	position: absolute;
	bottom: 0;
	color: black;
	display: block;
	text-align: center;
	width: 100%;
}
</style>


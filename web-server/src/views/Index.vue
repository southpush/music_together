<template>
<div id="index">
	<b-button @click='goIt'>go to inner about</b-button>
	<br>
	<br>
	<b-container class="bv-example-row">
		<b-row>
			<b-col sm='6' cols='3'>1 of 3</b-col>
			<b-col sm='3' cols='6'>2 of 3</b-col>
			<b-col sm='3' cols='3'>3 of 3</b-col>
		</b-row>
	</b-container>
</div>
</template>
<script>
export default {
	name: "index",
	data: () => ({

	}),
	methods: {
		goIt() {
			this.$router.push({
				name: 'innerAbout'
			})
		}
	}
}
</script>
<style lang="stylus" scoped>
.bv-example-row>div>div
	border solid 1px grey
	background: pine
</style>

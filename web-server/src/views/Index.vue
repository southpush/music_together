<template>
<div id="index">
	hello world
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

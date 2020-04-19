<template>
<div id="app">
	<router-view />
</div>
</template>

<script>
export default {
	name: "",
	data: () => ({

	}),
	created() {
		//do something after creating vue instance
		// 获取环境变量
		console.log(process.env.VUE_APP_TEST)
		// this.$axios.get("/local/test").then(res => {
		// 	console.log(res)
		// }).catch(err => {
		// 	console.log(err)
		// })
		// // 获取store
		// console.log(this.$store.state.index.index_value)
		// // 命名空间使用action
		// this.$store.dispatch({
		// 	'type': 'index/action2',
		// 	'value': true
		// }).then(res => {
		// 	console.log(res)
		// })
	}
}
</script>


<style lang="stylus">
</style>

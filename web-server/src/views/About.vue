<template>
<div class="about">
	<h1>This is an about page</h1>
	<router-link :to="{ name: 'innerAbout'}">show inner about</router-link>
	<router-view></router-view>
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
	}
}
</script>

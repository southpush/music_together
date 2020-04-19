<template>
<div id="index">
	<b-container>
		<b-row>
			<b-col>
				<audioDevicesSelect />
			</b-col>
			<!-- <b-col>

			</b-col> -->
		</b-row>
	</b-container>
</div>
</template>
<script>
import audioDevicesSelect from "../components/controlPanel/audioDevicesSelect"


export default {
	name: "index",
	data: () => ({

	}),
	components: {
		audioDevicesSelect
	},
	created() {
		// navigator.mediaDevices.getUserMedia({
		// 	audio: true
		// }).then(stream => {
		// 	console.log(stream)
		// }).catch(err => {
		// 	console.log(err)
		// })
	},
	mounted() {
		//do something after mounting vue instance

	},
	methods: {

	}
}
</script>
<style lang="stylus" scoped>


</style>

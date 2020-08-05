<template>
<div id="index">
	<b-container>
		<b-row>
			<b-col>
				<!-- <audioDevicesSelect /> -->
				<!-- <audio-card /> -->
				<message />
			</b-col>
			<!-- <b-col>

			</b-col> -->
		</b-row>
	</b-container>
</div>
</template>
<script>
import audioDevicesSelect from "../components/controlPanel/audioDevicesSelect"
import audioCard from '../components/audioNode/card.vue'
import message from '../components/connection/message.vue'

export default {
	name: "index",
	data: () => ({

	}),
	components: {
		// audioDevicesSelect
		// audioCard
		message
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
#index 
	background rgba(0,0,0,0.4)
	min-width 100vw
	min-height 100vh

</style>

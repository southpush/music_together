<template>
<div id="audioDevicesSelect">
	<div class="wrapper">
		<b-form-group label="输入设备" v-if="inputList">
			<b-form-radio v-for="device in inputList" :key="device.deviceId" v-model="inputSelect" name="inputDevice" :value="device">{{ device.label }}</b-form-radio>
		</b-form-group>

		<div class="mt-3">Selected: <strong>{{ inputSelect.label }}</strong></div>
	</div>
	<div class="wrapper">
		<b-form-group label="输出设备" v-if="outputList">
			<b-form-radio v-for="device in outputList" :key="device.deviceId" v-model="outputSelect" name="outputDevice" :value="device">{{ device.label }}</b-form-radio>
		</b-form-group>

		<div class="mt-3">Selected: <strong>{{ outputSelect.label }}</strong></div>
	</div>
	<button type="button" name="button" @click='getState'>get State</button>
	<button type="button" name="button" @click='startRecord'>start Record</button>
	<button type="button" name="button" @click='stopRecord'>end Record</button>


	<audio controls="controls" v-if="audioSrc">
		Your browser does not support the <code>audio</code> element.
		<source :src="audioSrc" type="audio/webm">
	</audio>
</div>
</template>
<script>
export default {
	name: "audioDevicesSelect",
	data: () => ({
		devicesList: [],
		inputSelect: {},
		outputSelect: {},
		recorder: null,
		chunks: [],
		audioSrc: null
	}),
	created() {
		navigator.mediaDevices.enumerateDevices().then(devicesList => {
			this.devicesList = devicesList
		}).catch(err => {})
	},
	computed: {
		inputList() {
			return this.devicesList.filter((device) => {
				return device.kind == 'audioinput'
			})
		},
		outputList() {
			return this.devicesList.filter((device) => {
				return device.kind == 'audiooutput'
			})
		}
	},
	methods: {
		getInputStream(device) {
			navigator.mediaDevices.getUserMedia({
				audio: {
					deviceId: device
				}
			}).then(res => {
				this.recorder = new MediaRecorder(res)
				this.recorder.ondataavailable = (e) => {
					this.chunks.push(e.data)
					this.audioSrc = window.URL.createObjectURL(e.data)
				}
				this.recorder.onstop = (e) => {
					console.log(e)
				}
			})
		},
		getState() {
			console.log(this.recorder.state)
			console.log(this.chunks)
		},
		startRecord() {
			this.recorder.start()
		},
		stopRecord() {
			this.recorder.stop()
		}
	},
	watch: {
		inputSelect(device) {
			this.getInputStream(device.deviceId)
		}
	}
}
</script>
<style lang="stylus" scoped>
</style>

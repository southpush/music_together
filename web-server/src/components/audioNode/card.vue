<template>
    <div id="audioCard">
        <button @click="test">test</button>
        <audio id="audioEle" controls ref="audioEle"/>
        <input id="input">
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            // 音频源
            source: null,
            // 输出
            dest: null,
        }
    },
    computed: {
        ...mapGetters(['audioContext'])
    },
    mounted() {
        
    },
    methods: {
        test() {
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            }).then(stream => {
                // this.$refs.audioEle.srcObject = stream
                // this.$refs.audioEle.onloadedmetadata = (e) => {
                //     this.$refs.audioEle.play()
                // }
                let source = this.audioContext.createMediaStreamSource(stream)
                let dest = this.audioContext.createMediaStreamDestination()
                source.connect(dest)
                this.$refs.audioEle.srcObject = dest.stream
                this.$refs.audioEle.onloadedmetadata = (e) => {
                    this.$refs.audioEle.play()
                }
                // source.connect(this.audioContext.destination)
                // console.log(source)
            })
        }
    },
}
</script>

<style lang='stylus' scoped>
#audioCard
    width: 400px;
    height: 200px
    border-radius 10px
    box-shadow 0 1px 6px 0 rgba(32, 33, 36, .28)
    background rgba(225, 225, 225, 0.8)
</style>
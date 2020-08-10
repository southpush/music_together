<template>
    <div>
        <button @click="connectPeers">connect</button>
        <button @click="disconnectPeers">disconnect</button>
        <input type="text" v-model="message" />
        <button @click="sendMessage">send</button>
        Message Received:
        <div v-for="(i, index) in receiveMessage" :key="index">
            {{ i }}
        </div>

    </div>
</template>

<script>
import { off } from 'process'
export default {
    data() {
        return {
            localConnection: null,
            sendChannel: null,

            message: '',

            remoteConnection: null,

            receiveChannel: null,
            receiveMessage: []
        }
    },
    mounted() {

    },
    methods: {
        connectPeers() {
            this.localConnection = new RTCPeerConnection()
            this.sendChannel = this.localConnection.createDataChannel("sendChannel")
            this.sendChannel.onopen = this.sendChannelOnopen
            this.sendChannel.onclose = this.sendChannelOnclose

            this.localConnection.ondatachannel = this.receiveChannelCallback

            this.remoteConnection = new RTCPeerConnection()
            this.remoteConnection.ondatachannel = this.receiveChannelCallback

            this.localConnection.onicecandidate = e => {
                // console.log(e)
                // !e.candidate || this.remoteConnection.addIceCandidate(e.candidate)
                // .catch(e => console.log(e))
                !e.candidate || console.log(e.candidate)
            };

            // this.remoteConnection.onicecandidate = e => !e.candidate
            //     || this.localConnection.addIceCandidate(e.candidate)
            //     .catch(e => console.log(e));




            this.localConnection.createOffer()
                .then(offer => {
                    this.localConnection.setLocalDescription(offer)
                    this.$
                }).then(() => {
                    // send offer request to server
                })

                // wait remoteConnection answer

                


                // .then(() => this.remoteConnection.setRemoteDescription(this.localConnection.localDescription))
                // .then(() => this.remoteConnection.createAnswer())
                // .then(answer => this.remoteConnection.setLocalDescription(answer))
                // .then(() => this.localConnection.setRemoteDescription(this.remoteConnection.localDescription))
                // .catch(e => console.log(e));
            window.$locolConnection = this.localConnection
            
        },
        disconnectPeers() {

        },
        sendMessage() {
            this.sendChannel.send(this.message)
            this.message = ''

        },
        sendChannelOnopen() {

        },
        sendChannelOnclose() {

        },
        receiveChannelCallback(e) {
            this.receiveChannel = event.channel
            this.receiveChannel.onmessage = (message) => {
                console.log(message)
                this.receiveMessage.push(message.data)
            }
        }
    }
}
</script>

<style lang='stylus' scoped>

</style>
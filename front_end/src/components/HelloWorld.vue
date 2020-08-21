<template>
    <h1>hello to home</h1>
    <button @click="sendMsg">send</button>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    onMounted,
    onUpdated,
    onUnmounted,
    watch,
    useSSRContext,
    Component
} from "vue";

import { useStore } from "vuex";
import ws from "../ws/index";

export default defineComponent({
    name: "hello world",
    props: {},
    setup(props: any) {
        const store = useStore();

        /**
         * create connection and set local description
         */
        onMounted(() => {
            store.dispatch({
                type: "webRTC/startConnection"
            })
        })
        

        const sendMsg = () => {
            ws.send({
                type: 'hello',
                room: '12',
                text: '123122aklsdgf'
            })
        }



        return {
            sendMsg
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

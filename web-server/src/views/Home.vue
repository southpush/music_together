<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
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

export default defineComponent ({
    name: "Home",
    components: {
        HelloWorld,
    },
    setup(props: any) {

    }
});
</script>

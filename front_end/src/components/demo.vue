<template>
    <p>{{ testData }}</p>
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
} from "vue";
import { useStore } from "vuex";

export default defineComponent({
    name: "hello world",
    props: {
        tProps: {
            require: true,
            default() {
                return '123'
            },
            type: String,
        }
    },
    setup(props: any) {
        const testData = "testData";

        onMounted(() => {
            console.log(props.tProps)
        })

        return {
            testData
        }
    }
})
</script>

<style lang='stylus' scoped>

</style>
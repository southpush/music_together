import Vue from 'vue';
import * as sendFunc from '../websocket/send'

let plugin = new Object()
plugin.install = function (Vue, options) {
    Vue.mixin({
        created() {
            // created
        }
    })
    Object.defineProperties(Vue.prototype, {
        $ws: {
            get() {
                return {
                    ...sendFunc,
                }
            }
        },
    })
};

Vue.use(plugin)

export default plugin;



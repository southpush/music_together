/**
 * 管理webRTC连接
 */
import ws from '../../ws/index';
export default {
    namespaced: true,
    state: () => ({
        localDesc: null,
        peerConnection: null,
    }),
    getters: {

    },
    mutations: {
        SET_LOCAL_DESCRIPTION(state: any, status: { desc: RTCSessionDescription }) {
            state.localDesc = status.desc
        },
        CREATE_PEER_CONNECTION(state: any) {
            state.peerConnection = new RTCPeerConnection({})
        }

    },
    actions: {
        async startConnection({ commit, state } : { commit: any, state: any}, payload: any) {
            commit("CREATE_PEER_CONNECTION")
            let offer = await state.peerConnection.createOffer();
            commit('SET_LOCAL_DESCRIPTION', {
                desc: offer
            })
            // todo 发送offer
            ws.sendOffer(offer);
        }
    }
}
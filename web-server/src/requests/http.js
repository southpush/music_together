import Vue from 'vue'

export function get(url, params){
    return new Promise((resolve, reject) => {
        Vue.$axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

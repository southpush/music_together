export default {
    namespaced: true,
    state: {
        index_value: 123123
    },
    actions:{
        action2({ commit, state}, params) {
            return new Promise(function(resolve, reject){
              if (params.value){
                  return resolve('success in action2')
              } else {
                  return reject('fail in aciton2')
              }
            })
        }
    }
}

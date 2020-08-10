"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//
//
let config = {
  baseURL: process.env.VUE_APP_BASE_URL + 'local' || "",
  timeout: 60 * 1000, // Timeout 60s
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

// add http header
_axios.defaults.headers.get['Access-Control-Allow-Origin'] = "*"
_axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

// request interceptor
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    // if(response.data.status === 'ok'){
    //   return Promise.resolve(response.data)
    // } else {
    //  // do something
    //  return Promose.reject(response.data.message)
    // }
    //
    return response;
  },
  function(error) {
    // // Do something with response error
    // if(error.reponse) {
    //   let tips = error.response.status in httpCode ? httpCode[error.response.status]: error.response.data.message
    //   alert(tips)
    //   if (error.response.status === 401) {
    //      router.push({
    //          path: '/login'
    //      })
    //    }
    // } else {
    //  alert("time out")
    //  return Promise.reject(new Error('time out'))
    // }
    //
    // // token expired or login failed

    return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  // Vue.axios = _axios;
  // window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    // axios: {
    //   get() {
    //     return _axios;
    //   }
    // },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;

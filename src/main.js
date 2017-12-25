// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/store'
import axios from 'axios'

// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false


Vue.prototype.$http=axios; //把axios对象挂到vue原型上
axios.interceptors.request.use(function(config){
  store.dispatch('showLoading');
  return config  
},function(err){  
  return Promise.reject(err)  
});  
axios.interceptors.response.use(function(response){  
  store.dispatch('hideLoading')  
  return response  
},function(err){  
  return Promise.reject(err)  
});  


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

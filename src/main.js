// window.pub_debug=true;//开启调试模式

window.PUB = {}
window.PUB.domain = "http://120.76.160.41:3000"
//window.PUB.domain="http://localhost:3000"

// import Vue from 'vue'
Vue.config.productionTip = false

import lodash from 'lodash'//导入lodash方法库
window.lodash = lodash
// import axios from "axios";
window.axios = axios;

// import moment from "moment";
// window.moment = moment;







// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// import "./mock.js";
// import "@/assets/js/mix.js";//注意位置要提前
import index from "@/index";



// import util from "@/assets/js/util.js";//注意位置要提前
// window.util = util;

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: index },

  ]
})









//import Vuex from 'vuex'//导入vuex模块
//Vue.use(Vuex)//应用组件

const store = new Vuex.Store({//定义Vuex的存储对象
  state: {
    debug: true,
  

  },

  mutations: {//变更事件
    setDebug(state, param) {//设置debug模式
      state.debug = param;

    }
  }
})

Vue.prototype.$store = store//让vue实例中可访问$store


// import dm_components from "dmagic-components";
// Vue.use(dm_components);

import Main from './main.vue'
new Vue({
  render: h => h(Main),
  router,
}).$mount('#app')
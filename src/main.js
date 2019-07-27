// window.pub_debug=true;//开启调试模式

window.PUB = {}
window.PUB.domain = "http://120.76.160.41:3000"
//window.PUB.domain="http://localhost:3000"

import Vue from 'vue'
Vue.config.productionTip = false

import lodash from 'lodash'//导入lodash方法库
window.lodash = lodash
import axios from "axios";
window.axios = axios;

import moment from "moment";
window.moment = moment;



import space from './components/space/index.js';   //默认情况下找的是index文件
Vue.use(space);   //必须有install
import debug_list from './components/common/debug_list/index.js';   //导入debug_list
Vue.use(debug_list);   //作为全局组件，必须有install
import debug_item from './components/common/debug_item/index.js';   //导入debug_item
Vue.use(debug_item);   //作为全局组件，必须有install
import ajax_populate from './components/common/ajax_populate/index.js';   //导入ajax_populate
Vue.use(ajax_populate);   //作为全局组件，必须有install
import loading from './components/common/loading/index.js';   //导入loading
Vue.use(loading);   //作为全局组件，必须有install



import VueRouter from 'vue-router'
Vue.use(VueRouter)
import "./mock.js";
import "@/assets/js/mix.js";//注意位置要提前
import index from "@/index";



import util from "@/assets/js/util.js";//注意位置要提前
window.util = util;

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/index', component: index },

  ]
})





import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



import Vuex from 'vuex'//导入vuex模块
Vue.use(Vuex)//应用组件

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




import Main from './main.vue'
new Vue({
  render: h => h(Main),
  router,
}).$mount('#app')
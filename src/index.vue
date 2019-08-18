<template>
  <div id="app" style>
    <m_head class="" ></m_head>1111
    <dm_space height="50" ></dm_space>

    <m_banner class="" ></m_banner>
    <m_intro class="" ></m_intro>
    <m_teacher class="" ></m_teacher>
    <m_course_intro class="" ></m_course_intro>
    <m_foot class="" ></m_foot>

  </div>
</template>

<script>
import Vue from "vue";
import m_head from "@/components/index/m_head";

import m_banner from "@/components/index/m_banner";
import m_intro from "@/components/index/m_intro";
import m_teacher from "@/components/index/m_teacher";
import m_course_intro from "@/components/index/m_course_intro";




import m_foot from "@/components/index/m_foot";

export default {
  components: {m_head,m_banner,m_intro,m_teacher,m_course_intro,m_foot  }, //注册组件
  methods: {
   
  },
  
  data() {
    return {
      // 导航菜单列表

    };
  },
  created() {
    //*引用当前用户名
    this.currentUserName = localStorage.loginUserName;
    document.onkeydown = e => {
      //绑定ctrl+D事件
      var keyCode = e.keyCode || e.which || e.charCode;
      var ctrlKey = e.ctrlKey || e.metaKey;
      if (ctrlKey && keyCode == 68) {
        console.log("ctrlKey", ctrlKey);
        console.log("keyCode", keyCode);
        // this.toggleDebug();//调用：{切换调试模式函数}

        let debug = this.$store.state.debug;
        console.log("debug", debug);
        this.$store.commit("setDebug", !debug);
        e.preventDefault(); //阻止默认事件
        return false;
      }
    };
  }
};
</script>

<style >
/* 单选框补丁 */
body .el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  -webkit-box-shadow: -1px 0 0 0 #e6a23c;
  box-shadow: -1px 0 0 0 #e6a23c;
}
</style>


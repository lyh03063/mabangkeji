<template>
  <div id="app" style>
    <m_head class></m_head>
    <dm_space height="20"></dm_space>
    <m_banner class></m_banner>
    <dm_space height="20"></dm_space>
    <m_intro class></m_intro>
    <dm_space height="20"></dm_space>
    <!-- <m_teacher class></m_teacher> -->
    <m_course_intro class></m_course_intro>
    <dm_space height="20"></dm_space>
    <m_foot class></m_foot>
    <m_floatbar class></m_floatbar>

    <div class="float-bar BC_fff"></div>
  </div>
</template>

<script>
import Vue from "vue";
import m_head from "@/components/index/m_head";

import m_banner from "@/components/index/m_banner";
import m_intro from "@/components/index/m_intro";
import m_teacher from "@/components/index/m_teacher";
import m_course_intro from "@/components/index/m_course_intro";
import m_floatbar from "@/components/index/m_floatbar";
import m_foot from "@/components/index/m_foot";

export default {
  components: {
    m_head,
    m_banner,
    m_intro,
    m_teacher,
    m_course_intro,
    m_foot,
    m_floatbar
  }, //注册组件
  methods: {},

  data() {
    return {
      // 导航菜单列表
    };
  },
  created() {}
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

.width-layout {
  width: 1200px;
  margin: 0 auto;
}
.big-title {
  font-size: 44px;
  line-height: 100px;
}
</style>


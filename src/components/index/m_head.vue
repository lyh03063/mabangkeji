<template>
  <div class>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    ><div class="DPIB FL MR30 ML20" >
      <img :src="logo" alt="" width="60" class="FL MR5" >
      <span class="FL DPIB MT15 FS24 ">码帮科技-前端培训</span>
      </div>
      <el-menu-item index="1">在线测试</el-menu-item>
      <el-submenu index="2">
        <template slot="title">在线教学资源</template>
        <el-menu-item index="2-1">HTML-API</el-menu-item>
        <el-menu-item index="2-2">CSS-API</el-menu-item>
        <el-menu-item index="2-3">JS-API</el-menu-item>
        
      </el-submenu>

      <el-menu-item index="4">
        <a href="https://pan.baidu.com/s/1Cshhb31kbK5mnj_Y4ekUrg " target="_blank">视频试学教程</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import logoImg from "@/assets/logo.png";
export default {
  data() {
    return {
      name: "menu模块",
       logo:logoImg,
       activeIndex: '1',
        activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  created() {}
};
</script>

<style scoped>
</style>

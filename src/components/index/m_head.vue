<template>
  <div class="m-head">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <div class="DPIB FL MR30 ML20 mb-title">
        <img :src="logo" alt width="60" class="FL MR5" />
        <span class="FL DPIB MT15 FS24 mb-title-text">码帮科技-前端培训</span>
      </div>
      <el-menu-item index="index" class="head-navigation">首页</el-menu-item>
       <el-menu-item index="exam"><a class="menu-a head-navigation" target="_blank" href="http://www.dmagic.cn/examList" >前端考试系统</a></el-menu-item>
      <el-submenu index="teach">
        <template slot="title" class="head-navigation">在线教学资源</template>
        <el-menu-item index="2-1">
          <a class="menu-a" target="_blank" href="http://www.dmagic.cn/apiPage/htmlApi">HTML-API</a>
        </el-menu-item>
        <el-menu-item index="2-2">
          <a class="menu-a" target="_blank" href="http://www.dmagic.cn/apiPage/cssApi">CSS-API</a>
        </el-menu-item>
        <el-menu-item index="2-3">JS-API[建设中]</el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="vedio">
        <a href="https://pan.baidu.com/s/1Cshhb31kbK5mnj_Y4ekUrg " target="_blank">视频试学教程（网盘提取码e9q3）</a>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import logoImg from "@/assets/logo.png";
export default {
  data() {
    return {
      name: "menu模块",
      logo: logoImg,
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    
  }
};
</script>

<style scoped>
.menu-a{
  display: block;
  width: 100%;
  height:100%;
}
@media screen and (max-width:768px){
  .mb-title{
    padding-left: 20px;
    width: 100%;
    text-align: center;
  }
  .mb-title-text{
    font-weight: 700;
    padding-left: 20px;
  }
  .head-navigation{
    width: 33%;
    text-align: center;
  }
}
</style>

<template>
  <div class="m-head">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      v-if="!movePage"
    >
      <div class="DPIB FL MR30 ML20 mb-title">
        <img :src="logo" alt width="60" class="FL MR5" />
        <span class="FL DPIB MT15 FS24 mb-title-text">码帮科技-前端培训</span>
      </div>
      <el-menu-item index="index" class="head-navigation">首页</el-menu-item>
      <el-menu-item index="exam">
        <a
          class="menu-a head-navigation"
          target="_blank"
          href="http://www.dmagic.cn/examList"
        >前端考试系统</a>
      </el-menu-item>
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
      </el-menu-item>-->
    </el-menu>
    <div v-if="movePage" class="movePage-box">
      <div class="FL movePage-text">码帮科技-前端培训</div>
      <div class="menu" v-if="showmenu" @click="showmenu=false"></div>
      <div class="close" v-if="!showmenu" @click="showmenu=true"></div>
      <div style="clear:both"></div>
      <div v-if="!showmenu">
        <div class="movePage-text  menu-box">首页</div>
        <div class="movePage-text  menu-box">
          <a style="color:white" target="_blank" href="http://www.dmagic.cn/examList">前端考试系统</a>
        </div>
        <div class="movePage-text menu-box">
          <el-dropdown size="medium">
            <span style="font-size:18px; color:white">
              在线教学资源
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">
                <a class="menu-a" target="_blank" href="http://www.dmagic.cn/apiPage/htmlApi">HTML-API</a>
              </el-dropdown-item>
              <el-dropdown-item command="b">
                <a class="menu-a" target="_blank" href="http://www.dmagic.cn/apiPage/cssApi">CSS-API</a>
              </el-dropdown-item>
              <el-dropdown-item command="c">JS-API[建设中]</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoImg from "@/assets/logo.png";
export default {
  data() {
    return {
      showmenu: true,
      movePage: false,
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
    if (window.screen.width < 768) {
      this.movePage = true;
    }
  }
};
</script>

<style scoped>
.menu-a {
  display: block;
  width: 100%;
  height: 100%;
}
.menu {
  float: right;
  margin-right: 5px;
  background-image: url("./菜单.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.close {
  float: right;
  margin-right: 0px;
  margin-top: 16px;
  background-image: url("./关闭.png");
  background-size: 60%;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
}
.movePage-box {
  padding-left: 10px;
  background-color: black;
  width: 100%;
  /* height: 50px; */
  line-height: 50px;
}
.movePage-text {
  color: white;
  font-size: 20px;
}
.menu-box {
  border-top: 1px solid gray;
  margin-right: 5px;
  font-size: 18px;
}
@media screen and (max-width: 768px) {
}
</style>

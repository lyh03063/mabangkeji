<template>
  <div id="app" style>
    <m_head class></m_head>
    <dm_space height="20"></dm_space>
    <m_banner class ></m_banner>
    
    <m_intro class ></m_intro>
    <dm_space height="20" ></dm_space>
    <!-- <m_teacher class></m_teacher> -->
    <m_course_intro class v-if="showPageList.showCourseIntro"></m_course_intro>
    <dm_space height="20" v-if="showPageList.showCourseIntro"></dm_space>
    <list_item ref="list_item" v-if="showPageList.showListItem"></list_item>
    <dm_space height="20" v-if="showPageList.showListItem"></dm_space>
    <m_foot class v-if="showPageList.showFoot"></m_foot>
    <m_floatbar class v-if="showPageList.showFoot"></m_floatbar>

    <div class="float-bar BC_fff" v-if="showPageList.showFoot"></div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  components: {
    m_head: () => import('@/components/index/m_head'),
    m_banner: () => import('@/components/index/m_banner'),
    m_intro: () => import('@/components/index/m_intro'),
    m_teacher: () => import('@/components/index/m_teacher'),
    m_course_intro: () => import('@/components/index/m_course_intro'),
    m_foot: () => import('@/components/index/m_foot'),
    m_floatbar: () => import('@/components/index/m_floatbar'),
    list_item: () => import('@/page/list_item')
  }, //注册组件

  methods: {
    // 页面滚动触发的方法，判断滚动条是否在底部,是触发事件
    scrollToTop(){
      //console.log('aaaa',document.documentElement.scrollTop);//滚动条位置
      //console.log('aaaa',document.documentElement.clientHeight);//可视内容高度
      //console.log('aaaa',document.documentElement.scrollHeight);//元素总高度
      if (document.documentElement.scrollTop+document.documentElement.clientHeight+10>document.documentElement.scrollHeight) {
       this.showPage()
      }
    },
    // 显示页面的方法
    showPage(){
      for (var item in this.showPageList) {
        if (!this.showPageList[item]) {
          this.showPageList[item]= true
           break;
        }
      }
    }
  },
  mounted(){
    // 页面天剑滚动事件
    window.addEventListener('scroll',this.scrollToTop)
    // console.log('aaaa',document.documentElement.clientHeight); //可视内容高度
    // 判断页面初始化时是否有滚动条
    setTimeout(()=>{

      if (document.documentElement.scrollHeight<=document.documentElement.clientHeight) {
        this.showPage()
      }
      // console.log('aaa',document.body.scrollHeight);//元素总高度
    },100)
  },
  data() {
    return {
      // 设置组件是否显示对象
      showPageList:{
        showCourseIntro:false,
        showListItem:false,
        showFoot:false
      },
    }
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


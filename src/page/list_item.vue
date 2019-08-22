
<template>
  <div class>
    <h1 class="PL20">学生项目列表</h1>
    <template >
      <el-tabs v-model="active" @tab-click="switchItem" class="PL20">
        <el-tab-pane :label="item.itemName" :name="index+''" v-for="(item,index) in itemList" :key="index">
          <item_detail :itemMsg="item"></item_detail>
        </el-tab-pane>
      </el-tabs>
    </template>
  </div>
</template>
<script>
import item_detail from "@/components/index/item_detail";
export default {
  components: {item_detail},

  data() {
    return {
      active:0,
      itemList:[{itemName:"唐球项目",imger:[{url:require('../itemImg/唐球1-1.png')},
        {url:require('../itemImg/唐球1-2.png')},
        {url:require('../itemImg/唐球1-3.png')},],
        description:'唐球是高尔夫球类的一个新式玩法，是一个高尔夫球教育兼顾地产类项目,小程序的主要功能有:高尔夫赛事,积分排名榜,报名功能，报名费微信支付功能等,还有一个后台管理系统,可以对小程序页面数据进行配置。',
        skill:"小程序+vue+element+mpvue"},
      {itemName:"水果商城",imger:[{url:require('../itemImg/水果商城2-1.png')},
      {url:require('../itemImg/水果商城2-2.jpg')},
      {url:require('../itemImg/水果商城2-3.jpg')},],
      description:'移动端水果生鲜类电商项目,实现了类似淘宝的功能,商家可以自定义分类水果,上传水果产品,销售水果,查看销售数据,而买家可以购买下单，加入购物车，微信支付,查看订单历史,保存个人资料。',
      skill:"原生态+vue+element"},
      {itemName:"个人主页",imger:[{url:require('../itemImg/唐球1-1.png')},],
      description:'学生的个人主页开发，主要用来展现学生能力的项目.',
      skill:"原生态+react"},
      {itemName:"案件管理系统",imger:[{url:require('../itemImg/唐球1-1.png')},],
      description:'一个用于管理律师案件的系统,主要功能有会员列表，案件列表，消息列表。这个项目实现了对于不同权限的会员的管理，普通会员只能看到与自己相关的数据,并且一些操作有限制，而超级管理员可以操作所有数据。',
      skill:"原生态+vue+element"},]
    };
  },
  methods: {
    switchItem(){
      console.log(this.active);
      
    }
  }
};
</script>
<style scoped>
</style>
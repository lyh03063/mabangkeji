<template>
  <div class="width-layout">
    <div class="big-title TAC">横跨5大行业项目库，积累项目经验</div>
    <div
      class="FS16 TAC LH30 PB20 PT20"
    >码帮科技全新升级的前端与移动开发课程新增了大型项目，覆盖PC端、后端、移动端、小程序端4大常用终端，贯穿80+个职场必备技术点和20+套技术解决方案，28天的超长项目课程让学员吃透项目的每个细节。除此之外，传智前端课程还拥有横跨租房、电商、教育、游戏、金融5大行业的项目库，覆盖常见业务、技术方案、应用终端等职场技术，贴合企业人才需求。</div>
    <div class="TAC">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="(item,index) in arrImg" :key="index">
          <h3 class="medium"><el-image  :src="item.url" ></el-image></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrImg: [
        { url: "http://img.sccnn.com/bimg/339/07100.jpg" },
        { url: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2831673121,1090390181&fm=15&gp=0.jpg" },
        { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2112582435,1556935404&fm=15&gp=0.jpg" },
        // { url: "000" },
        // { url: "000" }
      ]
    };
  },
  methods: {
    aaa() {}
  },
  created() {}
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

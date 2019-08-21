<template>
  <div class>
    <el-carousel indicator-position="outside" height="440px">
      <el-carousel-item v-for="item in arrImg" :key="item.url">
        <div class="img-box" :style="{'color':`#f00`,'background-image':`url(${item.url})`}"></div>
        <!-- <el-image  :src="item.url" ></el-image> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>





<script>
export default {
  data() {
    return {
      arrImg: [
        { url: "http://pwff5uqxs.bkt.clouddn.com/mabang_baner2.jpg" },
        { url: "http://www.mobiletrain.org/page/img/html5/banner_pic1.jpg" }
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
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img-box {
  width: 100%;
  height: 100%;
  background-position: center center;
}
</style>

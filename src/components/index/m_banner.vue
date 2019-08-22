<template>
  <div class>
    <el-carousel indicator-position="outside" :height="bannerHeight">
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
      bannerHeight:'440px',
      arrImg: [
        { url: "http://pwff5uqxs.bkt.clouddn.com/mabang_baner2.jpg" },
        { url: "http://www.mobiletrain.org/page/img/html5/banner_pic1.jpg" }
      ]
    };
  },
  methods: {
    aaa() {}
  },
  created() {
    if (window.screen.width<769&&window.screen.width>600) {
      this.bannerHeight = '230px'
    }else if (window.screen.width<=600&&window.screen.width>530) {
      this.bannerHeight = '190px'
    }else if (window.screen.width<=530&&window.screen.width>460) {
      this.bannerHeight = '160px'
    }
    else if (window.screen.width<=460&&window.screen.width>400) {
      this.bannerHeight = '130px'
    }else if (window.screen.width<400) {
      this.bannerHeight = '100px'
    }
  }
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
@media screen and (max-width:768px){
  .img-box{
    background-size: 100%;
    background-repeat: no-repeat;
  }
}
</style>

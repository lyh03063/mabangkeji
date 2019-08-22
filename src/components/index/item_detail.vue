
<template>
  <div class>
    <el-card class="box-card-item">
        <table class="item-tab"> 
            <tr>
                <td>项目名称：</td>
                <td>{{itemMsg.itemName}}</td>
            </tr>
            <tr>
                <td>采用技术：</td>
                <td>{{itemMsg.skill}}</td>
            </tr>
            <tr>
                <td>项目描述：</td>
                <td>{{itemMsg.description}}</td>
            </tr>
        </table>
    </el-card>
    <el-card class="box-card-img">
        <h3 class="img-title">项目截图：</h3>
       <el-image 
            v-for="(img,index) in itemMsg.imger"
            :key="index"
            :class="img.wide?'item-img-wide':'itme-img'"
            :src="img.url" 
            @click="changeImgList(index)"
            :preview-src-list="imgList">
      </el-image>
      </el-card>
  </div>
</template>
<script>
export default {
    props:['itemMsg'],
  components: {},

  data() {
    return {
        imgList:[]
    }
  },
  methods: {
   changeImgList(index){
      let img = this.imgList[index]
      this.imgList[index] = this.imgList[0]
      this.imgList[0] = img
   }
  },
  mounted(){
      this.itemMsg.imger.forEach(doc => {
        this.imgList.push(doc.url)
    });
  },
  created(){
      if (window.screen.width<768) {
          if (this.itemMsg.imger.length>2) {
              this.itemMsg.imger.length = 2
          }
          
      }
  }

};
</script>
<style  scoped>
    .item-img-wide{
        width: 280px;
        height: 180px;
        margin-left:20px;
        margin-right:20px;
    }
    .itme-img{
        width: 120px;
        height: 180px;
        margin-left:20px;
        margin-right:20px;
    }
    .box-card-item{
        float: left;
        width: 26.5%;
        height: 250px;
        margin: 5px 20px;
        
    }
    .box-card-img{
        float: left;
        /* width: ; */
        height: 250px;
        margin: 5px 20px;
        margin-left: 0px;
    }
    .img-title{
        margin-bottom: 10px;
    }
    .item-tab tr td:first-child{
        font-weight: 700;
        width: 75px;
        vertical-align:top;
    }
    .item-tab tr td{
        line-height:30px;
    }
    @media screen and (max-width:768px){
        .box-card-item{
            width: 90%;
            height: 100%;
            margin-left: 3%;
        }
        .box-card-img{
            width: 90%;
            height: 100%;
            margin-left: 3%;
        }
        .itme-img{
            margin-right: 0px;
            margin-bottom: 20px;
        }
    }
</style>
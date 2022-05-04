<template>
  <el-form class="form">
    <div class="block">
      <el-carousel :height="bannerHeight + 'px'">
        <el-carousel-item v-for="item in rabbitwrap" :key="item.url">
          <img :src="item.url" class="bannerimg" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <el-image :src="this.images[this.goodN]"> -->

    <!-- </el-image> -->
    <el-form-item style=":margin-top: 20px">
      <span style="font-weight: bold; font-size: 25px; color: black">
        {{this.data[this.goodN].goodN}}
      </span>
    </el-form-item>
    <el-form-item>
      <span style="font-weight: lighter; font-size: 15px; color: #4f4e4e">
        {{this.data[this.goodN].info}}
      </span>

    </el-form-item>
    <el-form-item>
      <span style="font-weight: bolder; font-size: 25px; color: red; float: left">
        ￥{{this.data[this.goodN].price}}
      </span>
    </el-form-item>
    <el-button style="float: right; width: 100px; height: 50px; background-color: red; border-color: red; border-radius: 10px" @click="purchase">
      <span style="font-weight: bolder; font-size: 20px; color: white">
        立即购买
      </span>
    </el-button>
  </el-form>
</template>

<script>
import rabbit from '../assets/rabbit.png'
import bookmark from '../assets/bookmark.png'

export default {
  name: "GoodsInfo",
  props: {
    goodN: {
      type: [String, Number],
      default :""
    },
  },
  data() {
    return {
      bannerHeight: 200,
      rabbitwrap:[
        {url:require("../assets/rabbit.png")},
        {url:require("../assets/rabbit-1.jpg")},
        {url:require("../assets/rabbit-2.jpg")},
        {url:require("../assets/rabbit-3.jpg")}
      ],
      images: {
        'rabbit': rabbit,
        'bookmark': bookmark,
      },
      data: {
        'rabbit': {
          goodN: "三耳兔子",
          info:"三耳兔子最棒啦，快来买啊！！",
          price: 100
        },
        'bookmark': {
          goodN: "纪念书签",
          info: "纪念书签最棒啦，快来买啊！！",
          price: 15
        },
      }
    }
  },
  mounted(){
    this.setSize();
    window.addEventListener('resize', ()=>{
      this.setSize();
    },false);
  },
  methods: {
    purchase() {
      this.$emit("Closed", false);
    },
    setSize(){
      this.bannerHeight = document.body.clientWidth / 4
    }
  }
}
</script>

<style scoped>

.bannerimg{
  /* padding-bottom:-20px; */
  object-fit:contain;
  vertical-align: center;
  width: 90%;
  /* height: inherit; */
  line-height:inherit;
}
.el-carousel__item {
  text-align: center;
  vertical-align: center;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.el-carousel__item h3 {
  color: #fff;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
/* .el-carousel__item:nth-child(1) {
   padding-top:50px;
 } */
.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #fff;
}

</style>

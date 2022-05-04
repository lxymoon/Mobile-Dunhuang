<template>
  <el-form class="form">
    <div class="block">
      <el-carousel height="200px"  type="card" :interval="4000" :autoplay="false">
        <el-carousel-item v-for="item in this.data[goodN].wrap" :key="item.url" style="height: 100%">
          <img :src="item.url" class="bannerimg" />
        </el-carousel-item>
      </el-carousel>
    </div>


    <el-form-item style="margin-top: 10%">
      <span style="font-weight: bold; font-size: 25px; color: black; float: left">
        {{this.data[this.goodN].goodN}}
      </span>
    </el-form-item>
    <el-form-item >
      <span style=" font-weight: lighter; font-size: 15px; color: #4f4e4e; float: left">
        {{this.data[this.goodN].info}}
      </span>

    </el-form-item>
    <el-form-item>
      <span style="font-weight: bolder; font-size: 25px; color: red; float: left; margin-bottom: 0px">
        ￥{{this.data[this.goodN].price}}
      </span>
    </el-form-item>
    <el-button style="float: right; width: 130px; height: 50px; background-color: red; border-color: red; border-radius: 10px" @click="purchase">
        <span style="font-weight: bolder; font-size: 20px; color: white; margin: auto">
          立即购买
        </span>
    </el-button>
  </el-form>

</template>

<script>
import rabbit from '../assets/rabbit.png'
import bookmark from '../assets/bookmark.png'
import rabbit1 from '../assets/rabbit-1.jpg'
import rabbit2 from '../assets/rabbit-2.jpg'
import rabbit3 from '../assets/rabbit-3.jpg'

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
      bannerHeight: 100,
      images: {
        'rabbit': rabbit,
        'bookmark': bookmark,
      },
      data: {
        'rabbit': {
          goodN: "三耳兔子",
          info:"三耳兔子最棒啦，快来买啊！！",
          price: 100,
          wrap: [
            {url: rabbit},
            {url: rabbit1},
            {url: rabbit2},
            {url: rabbit3}
          ]
        },
        'bookmark': {
          goodN: "纪念书签",
          info: "纪念书签最棒啦，快来买啊！！",
          price: 15,
          wrap: [
            {url: bookmark},
            {url: bookmark},
            {url: bookmark},
          ],
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
  height: 100%;
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
  margin: 0px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #ffffff;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #ffffff;
}

</style>

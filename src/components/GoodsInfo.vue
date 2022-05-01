<template>
  <el-form>
    <el-image :src="this.images[this.goodN]">

    </el-image>
    <el-form-item style="margin-top: 20px">
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
import {ref} from "vue";
export default {
  name: "GoodsInfo",
  props: {
    goodN: "",
  },
  data() {
    return {
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
  methods: {
    purchase() {
      this.$emit("Closed", ref(false));
    }
  }
}
</script>

<style scoped>

</style>

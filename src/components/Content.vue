<template>
  <div id="IndexContent" style="">
    <div id="title">
      <div style="margin: auto;
                  text-align: center;
                  width:60%;
                  font-family: shike;
                  font-size: 100px"
      >乘风游梦</div>
      <div style="font-family: shike; font-size: 40px; color: white; margin-top: 20px">线上虚拟展</div>
    </div>
    <div id="bar">
      <div id="1" style="display:inline-block; width: 20%; float: left">
        <a href="">
          <img src="../assets/paper-1.png" style="height: 500px">
        </a>
      </div>
      <div id="2" style="display:inline-block; width: 20%; float: left">
        <a href="">
          <img src="../assets/paper-2.png" style="height: 500px">
        </a>
      </div>
      <div id="3" style="display:inline-block; width: 20%; float: left; margin-left: 15px">
        <a href="">
          <img src="../assets/paper-3.png" style="height: 500px">
        </a>
      </div>
      <div id="4" style="display:inline-block; width: 20%; float: left; margin-left: 20px; margin-top: 7px">
        <a href="../views/GoodsView.vue" >
          <img src="../assets/paper-4.png" style="height: 500px">
        </a>
      </div>

    </div>

  </div>
</template>


<script>
import paper from '../assets/papers.png'

export default {
  name: "Content",
  props: {

  },
  data() {
    return {

      images: {
        'paper': paper,

      },
      data: {

      }
    }
  },
  methods: {
    goToGoods() {
      this.$router.push('/goods')
    }
  }
}
</script>

<style scoped>
@font-face {
  /* font-properties */
  font-family: huangkai;
  src:url('../assets/fonts/ZiKuTangHuangKaiTi-1.ttf');
}
@font-face {
  /* font-properties */
  font-family: shike;
  src:url('../assets/fonts/ZiKuTangShiKeTi-2.ttf');
}

#title {
  display: inline-block;
  height: 500px;
  width: 30%;
  /*background: #99a9bf;*/
  float: left
}

#bar {
  display:inline-block;
  width: 70%;
  height:500px;
  float: right;
  /*background: antiquewhite;*/
  text-align: center;
}

#1 {
  display: inline;
  float: left;
  width: 25%;
  background: #2c3e50;
}

#2 {
  /*position: absolute;*/
  display:inline;
  float: left;
  /*height: 500px;*/
  width: 25%
}
#3 {
  /*position: absolute;*/
  display:inline;
  float: left;
  /*height: 500px;*/
  width: 25%
}

#4 {
  /*position: absolute;*/
  display:inline;
  float: left;
  /*height: 500px;*/
  width: 25%
}
</style>
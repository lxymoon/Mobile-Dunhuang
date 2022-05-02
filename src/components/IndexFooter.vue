<template>
  <div id="IndexContent" style="vertical-align: middle;">
    <div style="width: 25%; height:40px;margin-top:50px;loat: left;clear:both; font-family: huangkai; font-size:30px; text-align: center">
      流动的敦煌
    </div>
    <div style="height: 40px; float:left; clear:both; text-align: center">
      <img src="../assets/word.png" style="height: 40px;margin-left: 115px">
    </div>
  </div>
</template>


<script>
import paper from '../assets/paper.png'

export default {
  name: "IndexFooter",
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
</style>
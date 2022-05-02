<template>
  <div id="IndexContent">
    <div>
      <img src="../assets/paper.png"><a style="font-family: shike">无界</a>
    </div>
  </div>
</template>


<script>
import paper from '../assets/paper.png'

export default {
  name: "IndexTitle",
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
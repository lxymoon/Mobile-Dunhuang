<template>
  <div id="IndexContent" style="">
    <div id="title" class="cartoon">
      <div style="margin: auto;
                  text-align: center;
                  width:60%;
                  font-family: shike;
                  font-size: 100px;
                  animation: flipInX 4s;
                  -webkit-animation: flipInX 4s"
      >乘风游梦</div>
      <div style="font-family: shike; font-size: 40px; color: white; margin-top: 20px">线上虚拟展</div>
    </div>
    <div id="bar">
      <div id="1" style="display:inline-block;
                                  width: 20%;
                                  float: left;
                                  -webkit-animation: fadeInDown 1s;
	                                animation: fadeInDown 1s;">
        <a href="">
          <img class="smaller" src="../assets/paper-1.png" style="height: 485px;transition:all 0.3s">
        </a>
      </div>
      <div id="2" style="display:inline-block; width: 20%; float: left;">
        <a href="">
          <img class="smaller" src="../assets/paper-2.png" style="height: 470px">
        </a>
      </div>
      <div id="3" style="display:inline-block; width: 20%; float: left; margin-left: 15px">
        <a href="">
          <img class="smaller" src="../assets/paper-3.png" style="height: 470px">
        </a>
      </div>
      <div id="4" style="display:inline-block; width: 20%; float: left; margin-left: 20px; margin-top: 7px">
        <router-link to="/goods" >
          <img class="smaller" src="../assets/paper-4.png" style="height: 470px">
        </router-link>
        <!-- <span @click="toGoods"><img @click="toGoods" src="../assets/paper-4.png" style="height: 500px"></span> -->
        <!-- <router-view key="key" /> -->
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
    toGoods() {
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
div.cartoon {

}
img.smaller {
  /*width: 250px;*/
  height: 470px;
  /*max-height: v-bind();*/
  /*max-width: 300px;*/
  animation: flipInX 4s;
  -webkit-animation: flipInX 4s
}

@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg)
  }

  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg)
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(0);
    transform: perspective(400px) rotateX(0);
    opacity: 1
  }
}
@keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    -ms-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-10deg);
    -ms-transform: perspective(400px) rotateX(-10deg);
    transform: perspective(400px) rotateX(-10deg)
  }

  70% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    -ms-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg)
  }

  100% {
    -webkit-transform: perspective(400px) rotateX(0);
    -ms-transform: perspective(400px) rotateX(0);
    transform: perspective(400px) rotateX(0);
    opacity: 1
  }
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px)
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    transform: translateY(-20px)
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
  }
}
</style>

<template>
  <div id="home">
    <el-container>
      <el-header>
        <IndexHeader/>
      </el-header>
      <el-main style="padding-bottom:0px">
        <Content />
        <!-- <router-view /> -->
      </el-main>
      <el-footer>
        <IndexFooter />
      </el-footer>
    </el-container>
  </div>
  <!-- <router-view/> -->
</template>

<script>
import IndexHeader from '../components/IndexHeader'
import Content from '../components/Content'
import IndexFooter from '../components/IndexFooter'
export default {
  components: {
    IndexHeader,
    Content,
    IndexFooter,
  },
};
</script>

<style>
#home {
  background-image:url(../assets/bg_mobile2.png);
  position: absolute;
  background-size: cover;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <el-container>
      <el-header>
        <IndexHeader/>
      </el-header>
      <el-main style="padding-bottom:0px">
        <Content />
      </el-main>
      <el-footer>
        <IndexFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import IndexHeader from '@/components/IndexHeader.vue'
import Content from '@/components/Content.vue'
import IndexFooter from '@/components/IndexFooter.vue'
export default {
  components: {
    IndexHeader,
    Content,
    IndexFooter,
  },
};
</script>

<style>

#app {
  background-image:url(./assets/bg_mobile2.png);
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

/*nav {*/
/*  padding: 30px;*/
/*}*/

/*nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>




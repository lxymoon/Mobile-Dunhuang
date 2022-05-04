<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App',
  methods: {

  }
}
</script>

<style>

#app {
  /*background-image:url(./assets/bg_mobile2.png);*/
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




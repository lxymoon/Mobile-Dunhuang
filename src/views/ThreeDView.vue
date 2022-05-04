<template>
  <div>
    <el-page-header @back="goBack" content="3D">
    </el-page-header>
    <model-obj src="static/models/obj/LeePerrySmith.obj" style="width: 50%; height: 50%; margin: auto"></model-obj>
  </div>
</template>

<script>
import { ModelObj } from 'vue-3d-model'

export default {
  components: {
    ModelObj
  },
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>

<template>

  <el-dialog
      custom-class="customerClass"
      title=""
      v-model="this.dialogVisible"
      width="30%"
      append-to-body
      :before-close="handleClose">
    <GoodsInfo :goodN = "this.goodN" v-on:Closed = "RClosed">
    </GoodsInfo>
  </el-dialog>

  <div style="display: none">
    <img src="../assets/rabbit.png" ref="rabbit">
  </div>
  <div style="display: none">
    <img src="../assets/bookmark.png" ref="bookmark">
  </div>
  <div style="display: none">
    <img src="../assets/wall.png" ref="wall">
  </div>
  <el-input v-model="this.now.x"></el-input>
  <el-input v-model="this.now.y"></el-input>
  <el-input v-model="this.offsets['rabbit'].x"></el-input>
  <el-input v-model="this.offsets['rabbit'].y"></el-input>
  <el-input v-model="this.test"></el-input>
  <canvas
      ref="myCanvas"
      id="myCanvas"
      width="100"
      height="200"
      style="background: black; height: 700px; width: 1500px; "
      @mousedown="canvasMouseDown"
      @mousemove="canvasMouseMove"
      @mouseup="canvasMouseUp"
  ></canvas>

</template>

<script>
import {ref} from "vue";
import GoodsInfo from "@/components/GoodsInfo";
export default {
  name: "GoodsView",
  components: {
    GoodsInfo
  },
  data() {
    const handleClose = (done) => {
      done();
    }
    return {
      handleClose,
      test:'no',
      goodN: "",
      dialogVisible: ref(false),
      images: {
        "rabbit":null,
        "bookmark": null,
        'wall': null
      },
      sizes: {
        'rabbit': {width:250, height: 250},
        'bookmark': {width: 250, height: 250},
        'wall': {width: 3000, height: 800},
      },
      offsets: {
        "rabbit": {x:250, y:400},
        "bookmark": {x:1000, y:200},
        'wall': {x: -500, y: 0},
      },
      ctx: null,
      myCanvas: null,
      now: {
        x:0,
        y:0,
      },
      pos: {
        x:0,
        y:0
      },
      down: ref(false),
    }
  },

  methods: {
    canvasMouseDown(e) {
      this.down = ref(true);
      this.now = this.getCanvasMousePos(e);
      if (this.inImg('rabbit')) {this.clickImg('rabbit'); this.test = 'yes'; return;}
      if (this.inImg('bookmark')) {this.clickImg('bookmark');}

    },
    canvasMouseMove(e) {
      if (this.down) {
        this.pos = this.getCanvasMousePos(e);
        if (!((this.offsets['wall'].x >= -100 && this.pos.x > this.now.x) || (this.offsets['wall'].x <= -this.sizes['wall'].width + this.myCanvas.width && this.pos.x < this.now.x))) {
          this.ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height)
          this.offsetBack('wall');
          this.offset('rabbit');
          this.offset('bookmark');
          this.draw('wall');
          this.draw('rabbit');
          this.draw('bookmark');
          this.now = this.pos;
        }
      }
    },
    canvasMouseUp() {
      this.down = ref(false);
    },
    getCanvasMousePos (e) {
      const rect = this.myCanvas.getBoundingClientRect()
      const x = ((e.clientX - rect.left))
      const y = ((e.clientY - rect.top))
      return {
        x: x,
        y: y
      }
    },
    init() {
      this.myCanvas = this.$refs.myCanvas;
      this.setupCanvas(this.myCanvas);
      this.images['rabbit'] = this.$refs.rabbit;
      this.images['bookmark'] = this.$refs.bookmark;
      this.images['wall'] = this.$refs.wall;
      this.draw('wall');
      this.draw("rabbit");
      this.draw('bookmark');
    },
    setupCanvas(myCanvas) {
      let rect = myCanvas.getBoundingClientRect();
      let scale = window.devicePixelRatio || 1;
      myCanvas.width = Math.floor(rect.width * scale);
      myCanvas.height = Math.floor(rect.height * scale);
      this.ctx = myCanvas.getContext('2d');
      this.ctx.scale(scale, scale);
    },
    draw(name) {
      this.ctx.drawImage(this.images[name], this.offsets[name].x, this.offsets[name].y, this.sizes[name].width, this.sizes[name].height);
    },
    offset(name) {
      this.offsets[name].x = this.offsets[name].x + (this.pos.x - this.now.x)
    },
    offsetBack(name) {
      this.offsets[name].x = this.offsets[name].x + (this.pos.x - this.now.x) * 0.3
    },
    inImg(name) {
      let IX = this.offsets[name].x;
      let IY = this.offsets[name].y;
      let width = this.sizes[name].width;
      let height = this.sizes[name].height;
      let x = this.now.x;
      let y = this.now.y;
      return x >= IX && x <= IX + width && y >= IY && y <= IY + height;
    },

    clickImg(name) {
      this.goodN = name;
      this.dialogVisible = ref(true);
      this.down = ref(false)
    },

    RClosed(msg) {
      this.dialogVisible = msg;
    }

  },
  mounted() {
    this.init()
  },
}

</script>

<style scoped>

</style>

<style>
.customerClass{
  display: flex;
  flex-direction: column;
  margin:0 !important;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  height:600px;
  width: 600px;
  border-radius: 50px;
  /*height: 40%;*/
}
</style>

<template>
  <div class="Header">
    <div class="el-menu-demo" >
      <!--      logo块      -->
<!--      <div id="logo" style="height: 70px; float: left">-->
<!--        <img src="../assets/1651423963_199014.png" style="height: 70px">-->
<!--      </div>-->
<!--      右侧登录登出块-->
      <div class="demo-type" style="position:relative;height:60px;vertical-align: center; padding-top: 10px">
        <div v-on:click="dialogVisible = true" style="float: right; padding-right:6px; "
             >
          <el-avatar v-on:click="dialogVisible = true" @click.native="dialogVisible = true"
                     v-if="this.$store.state.isLogin === false"
                     style="height: 50px;width:50px"> 登录
          </el-avatar>
        </div>
        <div style="float: right; padding-right:6px;"
             @click="handleLogout"
             v-if="this.$store.state.isLogin === true">
          <el-avatar> 登录 </el-avatar>
        </div>
      </div>

      <el-dialog title="" :visible.sync="dialogVisible" width="600px" >
        <h1>登录</h1>
        <div style="margin-top: 15px">
          <el-input v-model="username" placeholder="用户名"></el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
              v-model="password"
              placeholder="密码"
              show-password
          ></el-input>
        </div>
        <div style="margin-top: 10px " >
          <a style=" color:#409EFF; float:right;margin-right:15px; text-decoration:none " href="">忘记密码</a>
        </div>

        <div class="dialog-footer" style="height:50px;padding-top: 25px">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button>  -->
          <!-- style=":text-align:left" -->
          <el-button type="primary" @click="handleLogin" style="text-align:center">确 定</el-button>
          <span style="line-height:30px; text-align:center;padding-top:30px">
            <li style="font-size: 14px">没有账号？
              <a style="color:#409EFF; text-decoration:none;cursor:pointer" @click="makeDialogUnvisAndDialog2vis">立即注册</a>
            </li>
          </span>
        </div>
      </el-dialog>

      <el-dialog title="" :visible.sync="dialog2Visible" width="600px" >
        <h1>注册</h1>
        <div style="margin-top: 15px">
          <el-input v-model="username" placeholder="用户名"></el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input v-model="username" placeholder="手机号码"></el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
              v-model="password"
              placeholder="密码"
              show-password
          ></el-input>
        </div>
        <div style="margin-top: 15px">
          <el-input
              v-model="password"
              placeholder="确认密码"
              show-password
          ></el-input>
        </div>

        <div class="dialog-footer" style=":text-align:center; height:50px; padding-top: 25px">
          <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
          <el-button type="primary" @click="handleLogin" style=":text-align: center">注 册</el-button>
          <span style=":text-align:center;line-height:30px">
            <li style="font-size: 14px">已有账号？
              <a style="color:#409EFF; text-decoration:none;cursor:pointer" @click="makeDialog2UnvisAndDialogvis">立即登录</a>
            </li>
          </span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      dialogVisible: false,
      dialog2Visible: false,
      username: "",
      password: "",
      password2: "",
      phoneNumber: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      keyPath;
      if (key === "1") {
        this.$router.push({ path: "/" }).catch((error) => error);
      }
      if (key === "2") {
        this.$router.push({ name: "files" }).catch((error) => error);
      }
      if (key === "3") {
        this.$router.push({ name: "editor" }).catch((error) => error);
      }
    },
    handleLogin() {
      let st = this.$store;
      let nt = this.$notify;
      let uv = this.makeDialogUnvis;
      this.$axios
        .post(
          "publish/login",
          this.$qs.stringify({
            username: this.username,
            password: this.password,
          })
        )
        .then(function (response) {
          if (response.data.errno === 0) {
            console.log("login success");
            uv();
            st.commit("login");
            nt({
              title: "登录成功",
              type: "success",
              position: 'top-left',
              offset:60,
            });

          } else {
            nt.error({
              title: "密码错误",
              position: 'top-left',
              offset:60
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleLogout() {
      this.$store.commit("logout");
    },
    handleRegist() {
      let st = this.$store;
      let nt = this.$notify;
      let uv = this.makeDialog2Unvis;
      this.$axios
        .post(
          "publish/login",
          this.$qs.stringify({
            username: this.username,
            password: this.password,
            phoneNumber: this.phoneNumber,
            password2: this.password2,
          })
        )
        .then(function (response) {
          if (response.data.errno === 0) {
            console.log("regist success");
            uv();
            st.commit("regist");
            nt({
              title: "注册成功",
              type: "success",
              position: 'top-left',
              offset:60,
            });

          } else {
            nt.error({
              title: "密码不同",
              position: 'top-left',
              offset:60
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    makeDialogUnvis() {
      this.dialogVisible = false;
    },
    makeDialogUnvisAndDialog2vis() {
      this.dialogVisible = false;
      this.dialog2Visible = true;
    },
    makeDialog2UnvisAndDialogvis() {
      this.dialogVisible = true;
      this.dialog2Visible = false;
    }
  },
};
</script>

<style scoped>
* {
	padding: 0;
	margin: 0;
}
h1 {
  margin: 3px 0;
  font-size: 2em;
  font-weight: bold;
}

html,body {
	text-align: center;
}
html{
  /*background-image:url(@/assets/bg-1.png);*/
    background: rgba(255, 255, 255, .3);
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
    position: absolute;
    /*background-repeat:no-repeat;*/
    background-size: 100% 100%;
    /*background-color:#ffffff;*/
    width: 100%;
    height: 100%;
    z-index: -1;
}
.Header {
  background-color: transparent;
}

.Header >>> .el-menu{
  background-color: transparent;
}

.el-main padding {
  --el-main-padding: 0px;
}
.el-menu-demo {
  position:relative;
  text-align:center;
  color:white;
  z-index : 1;
}

.el-menu-demo::before{
  content:'';
  position:absolute;
  top:0;
  left:0;
  background:transparent url(../assets/bg_mobile2.png) center center no-repeat;;
  filter:blur(5px);
  z-index:2;
  background-size:cover;
}


</style>

<template>
<div id="login">
  <h1 @click="login()">Login</h1>
  <el-dialog title="登录" :visible.sync="dialogTableVisible">
      <div class="head-img">
        <img src="../assets/normal.0447fe9.png" alt="" width="100%" height="100%" id="normal" v-show="showObj.normal">
        <img src="../assets/greeting.1415c1c.png" alt="" width="100%" height="100%" id="greeting" v-show="showObj.greeting">
        <img src="../assets/blindfold.58ce423.png" alt="" width="100%" height="100%" id="blindfold" v-show="showObj.blindfold">
      </div>
      <el-input type="text" v-model="ruleForm2.user" placeholder="请填写用户名" size="large" @blur="validate()" @focus="focusFn('user')"></el-input>
      <el-input type="password" v-model="ruleForm2.pass" placeholder="请输入密码" size="large" @blur="validate()" @focus="focusFn('pass')"></el-input>
    <el-button type="primary" @click="submitForm()">登录</el-button>
  </el-dialog>

</div>
</template>

<script>
export default {
  data() {
      return {
        dialogTableVisible:false,
        showObj: {
           normal: true,
           greeting:false,
           blindfold:false
        },
        ruleForm2:{
          user:'',
          pass:''
        }
      };
    },
    methods: {
      submitForm() {
        var url = `/login?userName=${this.ruleForm2.user}&passWord=${this.ruleForm2.pass}`;
        this.$http.get(url).then(data => {
          if(data.body && data.body.data){
            document.cookie = data.body.userName;
            this.$router.push({ path: 'admin' });
          }
        });

      },
      login(){
        this.dialogTableVisible = true;
      },
      validate(){
        var _this = this;
          _this.showObj.normal = true;
          _this.showObj.greeting = false;
          _this.showObj.blindfold = false;
      },
      focusFn(str){
        var _this = this;
        if(str === 'user'){
          _this.showObj.normal = false;
          _this.showObj.greeting = true;
          _this.showObj.blindfold = false;
        }else if(str === 'pass'){
          _this.showObj.normal = false;
          _this.showObj.greeting = false;
          _this.showObj.blindfold = true;
        }
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#login .el-input{
  margin-bottom: 30px;
}
#login .el-dialog__body{
  position: relative;
}
#login .head-img{
  width: 120px;
  height: 95px;
  position: absolute;
  top: -100px;
  left:-30px;
}
#login .normal{
  display:block;
}
#login .greeting{
  display: none;
}
</style>

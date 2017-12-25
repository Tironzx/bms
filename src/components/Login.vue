<template>
  <div>
      <div class="loginBox">
          <input type="text" placeholder="输入用户名" v-model="userName" class="userName">
          <br />
          <input type="password" placeholder="输入密码" v-model="passwd" class="passwd">
          <p class="remenber"><input type="checkbox" id="remenber" v-model="remenberPd" ><label for="remenber">记住密码</label></p>
          <div class="login" @click="login">登录</div>
      </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                userName:'18547528459',
                passwd:'123456',
                remenberPd:false
            }
        },
        methods:{
            login(){
                if(this.userName&&this.passwd){
                    if(this.remenberPd){
                        window.localStorage.setItem('userName',this.userName);
                        window.localStorage.setItem('passwd',this.passwd);
                    }
                    this.$router.push('/index');
                }  
            }
        }
    }
</script>
<style scoped>
    .loginBox {
        width: 500px;
        height: 300px;
        background-color: #fff;
        color: #333;
        font-size: 16px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -250px;
        margin-top: -150px;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
    }
    /* 用户名 */
    .userName,.passwd {
        list-style: none;
        width: 300px;
        height: 40px;
        line-height: 40px;
        margin: 30px 100px 10px 100px;
        border: 1px solid #ddd;
        padding-left: 35px;
        border-radius: 5px;
        box-sizing: border-box;
    }
    .userName{
        background: url('../assets/img/login.png') no-repeat 0 1px;
    }
    .passwd {
        margin-top: 20px;
        background: url('../assets/img/passwd.png') no-repeat 0 1px;
    }
    .remenber {
        padding-left: 100px;
    }
    .remenber>input {
        list-style: none;
        width: 20px;
        height: 20px;
        vertical-align: sub;
    }
    .login {
        width: 300px;
        height: 40px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        margin-left: 100px;
        margin-top: 20px;
        background-color: #ea562d;
        border-radius: 5px;
        cursor: pointer;
    }
</style>

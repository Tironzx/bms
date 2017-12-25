<template>
  <div id="passwd">
      <ul>
            <li>
              <span>账号</span>
              <b>13385487598</b>
            </li>
            <li>
              <span>验证码</span>
              <input type="number" maxlength="4" placeholder="请填写验证码">
              <b class="code" @click="code">获取验证码</b>
            </li>
            <li>
                <span>新密码</span>
                <input type="password" v-model="passwd" placeholder="请输入新密码">
            </li>
            <li>
                <span>新密码</span>
                <input type="password" v-model="okpasswd" placeholder="请再次确认新密码">
            </li>
      </ul>
      <div class="submit">
          <p @click="submit">提交</p>
      </div>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                passwd:'',
                okpasswd:''
            }
        },
        methods:{
            code(event){
                let time=60;
                var timer=setInterval(function(){
                    time--;
                    event.target.innerHTML=time;
                    if(time==0){
                        event.target.innerHTML="获取验证码";
                        clearInterval(timer);
                        timer=null;
                    }
                },1000)     
            },
            submit(){
                if(this.passwd!=this.okpasswd){
                    alert("您输入的密码不一致");
                }
            }
        }
    }
</script>
<style scoped>
    #passwd {
        height: 600px;
        box-sizing: border-box;
        padding: 20px 30px;
        font-size: 14px;
        color: #333;
    }
    li{
        height: 50px;
        padding: 10px 0;
        box-sizing: border-box;
    }
    li>span {
        display: inline-block;
        width: 80px;
    }
    li b {
        font-weight: normal;
    }
    li input {
        width: 150px;
        height: 30px;
        padding-left: 10px;
        border: 1px solid #ddd;
    }
    .code {
        display: inline-block;
        padding: 5px 15px;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        background-color: #ea652d;
        margin-left: 10px;
        cursor: pointer;
    }
    .submit {
        position: fixed;
        left: 0;
        bottom: 0;
        right:0;
        height: 70px;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #ddd;
    }
    .submit>p {
        margin-left: 75%;
        box-sizing: border-box;
        margin-top: 20px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        text-align: center;
        background-color: #ea562d;
        color: #fff;
        cursor: pointer;
    }
</style>

<template>
  <div>
        <div class="top-line"></div>
        <div class="data-top-title">
            <div class="data-top-title-content">
            <div class="data-top-title-logo">
                <router-link to="{path:'/index'}"><img src="../assets/img/logo.png" alt=""></router-link>
                <div class="logo-text">·&nbsp;管理平台</div>
            </div>
            <ul class="data-top-title-userinfo">
                <li>商家热线：028-67873758</li>|
                <li>廉政举报</li>|
                <li>张学友&nbsp;&nbsp;<img src="../assets/img/information.png" alt=""></li>|
                <li @click="logout">{{loginState}}</li>
            </ul>
            </div>
        </div>
  </div>
</template>
<script>
    export default {
        data(){
            return {
                dialogVisible: false,
       	        loginState:'退出'
            }
        },
        props:['userName','userType'],
        methods:{
  	        logout(event) {
                this.$confirm('确认退出？').then(_ => {
                  this.$router.push({path:'/'});
                }).catch(_ => {
                  console.log('error')
                });
            }
        }
    }
</script>
<style scoped>
.top-line{
	background: #01d79f;
	height: 3px;
}
.data-top-title{
	background: #ffffff;
	line-height: 65px;
    width: 100%;
}
.data-top-title-content{
    display: flex;
    justify-content: space-between;
	margin: auto;
	width: 1200px;
}
/*logo*/
.data-top-title-logo {
  width: 20%;
  height: 65px;
}
.data-top-title-logo:hover {
  cursor: pointer;
}
.data-top-title-logo>a {
  display: inline-block;
}
.data-top-title-logo>a>img {
  vertical-align: middle;
}
/*商家登录信息*/
.data-top-title-userinfo {
  display: flex;
  justify-content: space-between;
  width: 50%;
  height: 65px;
  font-size: 16px;
}
.data-top-title-userinfo>li {
  padding: 0 30px;
}
.data-top-title-userinfo>li:hover {
  cursor: pointer;
}
.data-top-title-userinfo>li:nth-child(3)>img {
  vertical-align: middle;
}
.data-top-title-userinfo>li:last-child {
  text-align: right;
  padding-right: 0;
}
.logo-text{
	display:inline-block;
	vertical-align: top;
	font-family: '微软雅黑';
	margin-left: 10px;
	font-size: 20px;
	color: #999999;
}
.top-title-user{
	display: inline-block;
	margin-left: 820px;
}
.top-user{
	display: inline-block;
	vertical-align: super;
	-moz-user-select:none;/*火狐*/
	-webkit-user-select:none;/*webkit浏览器*/
	-ms-user-select:none;/*IE10*/
	-khtml-user-select:none;/*早期浏览器*/
	user-select:none;
	padding-right:15px;
  color: #333333;
}
.top-user:active{
	color: #01d79f;
}
.login-contain{
	text-align: center;
}
.login-input{
	width: 300px;
	margin: auto;
	margin-top: 15px;
}
</style>

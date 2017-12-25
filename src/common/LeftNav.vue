<template>
  <div id="hmoe">
		 <el-menu  default-active="1"  class="el-menu-vertical-demo" background-color="#fff" text-color="#303133" router
      active-text-color="#ea652d" unique-opened>
			<el-menu-item index="1" :route="{path:'/indexContent'}">
        <i class="man-icon-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
					<img src="../assets/img/indent.png" alt="">&nbsp;&nbsp;<span>订单管理</span>
				</template>
				<el-menu-item index="2-1" :route="{path:'/order'}">订单</el-menu-item>
      </el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<img src="../assets/img/finance.png" alt="">&nbsp;&nbsp;<span>财务管理</span>	
				</template>	
					<el-menu-item index="3-1" :route="{path:'/accounting'}">收益核算</el-menu-item>
					<el-menu-item index="3-2" :route="{path:'/withdrawal'}">收益提现</el-menu-item>
			</el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <img src="../assets/img/merchant.png" alt="">&nbsp;&nbsp;
          <span>商家中心</span>
        </template>
        <el-menu-item index="4-1" :route="{path:'/product'}">产品管理</el-menu-item>
        <el-menu-item index="4-3" :route="{path:'/merchant'}">商家管理</el-menu-item>
				<el-menu-item index="4-4" :route="{path:'/teacher'}">老师管理</el-menu-item>
      </el-submenu>
			<el-menu-item index="5" :route="{path:'/passwd'}">
        <img src="../assets/img/password.png" alt="">&nbsp;&nbsp;
        <span slot="title">修改密码</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
      name:'hmoe',
      methods:{
        
      }
  }
</script>
<style scoped>
  .man-icon-home {
		display: inline-block;
		width: 18px;
		height: 18px;
		margin-right: 10px;
		background: url(../assets/menu/home.png);
		background-size: 100% 100%;
  }
  img {
    vertical-align: sub;
  }
  .is-active {
    background-color: #ea652d;
  }
</style>

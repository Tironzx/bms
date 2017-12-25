<template>
  <div>
      <!-- 搜索框 -->
    <div class="checkbox-container">
        <el-row>
            <el-col :span="8">
                <span class="checkbox-container-seller">一找轻松(金鹿店)</span>
            </el-col>
            <el-col :span="13">
                <input type="text" class="checkbox-container-ticket" placeholder="请输入消费码，先验证，再接待
"/>
            </el-col>
            <el-col :span="3">
                <div class="checkbox-container-button">验证</div>
            </el-col>
        </el-row>
    </div>
    <!-- 数据 -->
    <div style="margin-top: 40px;">
        <img style="margin-left: 30px;" src="../assets/home/data.png"/><font style="margin-left: 10px;color: #ea652d;"><b>数据</b></font>
    </div>
    <div class="data-total-container">
        <el-row>
            <el-col class="data-total-container-border" :span="6">
                <div>￥0</div>
                <div>团购验券量</div>
            </el-col>
            <el-col class="data-total-container-border" :span="6">
                <div>￥0</div>
                <div>买单订单量</div>
            </el-col>
            <el-col class="data-total-container-border" :span="6">
                <div>￥0</div>
                <div>顾客退款</div>
            </el-col>
            <el-col :span="6">
                <div>￥0</div>
                <div>商家应得</div>
            </el-col>
        </el-row>
    </div>
    <!--表格-->
    <div class="data-total-container-table">
        <el-table :data="tableData" height="280" style="width: 100%" border>
            <el-table-column align="center" prop="date" label="验证时间"></el-table-column>
            <el-table-column align="center" prop="code" label="验证消费码" ></el-table-column>
            <el-table-column align="center" prop="address" label="验证门店"></el-table-column>
            <el-table-column align="center" prop="project" width="220" label="所属项目" ></el-table-column>
            <el-table-column align="center" prop="buy" width="100" label="购买价" ></el-table-column>
            <el-table-column align="center" prop="settlementPrice" width="100" label="结算价"></el-table-column>
        </el-table>
    </div>
    <!-- 商学院 -->
    <div class="data-business-school">
        <font><b>商学院</b></font>
    </div>
    <el-row class="data-product-upload">
        <el-col :span="4">
            <img width="100%" src="../assets/home/timg.jpg" />
        </el-col>
        <el-col :span="6">
            <div style="margin-left: 20px;">如何上传产品<br/>2018-02-21 13:00</div>
        </el-col>
        <el-col :span="4">&nbsp;</el-col>
        <el-col :span="4">
            <img width="100%" src="../assets/home/timg.jpg" />
        </el-col>
        <el-col :span="6">
            <div style="margin-left: 20px;">如何上传产品<br/>2018-02-21 13:00</div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                tableData:[]
            }
        },
        mounted(){
            //获取数据
            this.fetchData()
        },
        methods:{
            fetchData(){
                var _this=this;
                this.$http.get('src/serverData/home.json').then(function(response){
                     _this.tableData=response.data;
                }).catch(function(err){
                    console.log("请求错误"+err);
                })
            }
        }
    }
</script>
<style scoped>
    /*搜索框*/
	.checkbox-container {
		border: 1px solid #ea652d;
		height: 45px;
		display: block;
		width: 800px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 5px;
	}
  /*一找轻松*/
	.checkbox-container-seller{
		display: block;
		margin-left: 20px;
		width: 230px;
		line-height: 45px;
	}
  /*输入框*/
	.checkbox-container-ticket{
		border: none;
		border-left: 1px solid #ddd;
        padding-left: 20px;
		display: block;
        font-size: 16px;
        color: #666;
		height: 45px;
		width: 100%;
        box-sizing: border-box;
	}
  /*验证按钮*/
	.checkbox-container-button{
		display: block;
		text-align: center;
		background: #ea652d;
        color: #fff;
		height: 45px;
		line-height: 45px;
	}
  /*数据*/
	.data-total-container{
		border: 1px solid #ddd;
		width: 850px;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
        margin-top: 20px;
        padding-top: 40px;
        padding-bottom: 40px;
	}
    .data-total-container-border {
        border-right: 1px solid #ddd;
    }
    /*表格*/
    .data-total-container-table {
        width: 850px;
        box-sizing: border-box;
        margin: 20px auto 0 auto;
    }
    /*商学院*/
    .data-business-school {
        margin-top: 40px;
        margin-left: 30px
    }
    .data-business-school>font {
        margin-left: 10px;
        color: #ea652d;
    }
    /*产品上传*/
    .data-product-upload {
        margin-top: 20px;
        width: 850px;
        margin-left: auto;
        margin-right: auto;
    }
</style>

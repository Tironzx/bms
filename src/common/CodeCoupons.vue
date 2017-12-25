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
        <!--表格-->
        <div class="data-total-container-table">
            <el-table :data="tableData" style="width: 100%" border>
                <el-table-column align="center" width="100" prop="date" label="验证时间"></el-table-column>
                <el-table-column align="center" prop="code" label="验证消费码" ></el-table-column>
                <el-table-column align="center" prop="address" label="验证门店"></el-table-column>
                <el-table-column align="center" prop="project" width="220" label="所属项目" ></el-table-column>
                <el-table-column align="center" prop="buy" width="100" label="购买价" ></el-table-column>
                <el-table-column align="center" prop="settlementPrice" label="结算价"></el-table-column>
            </el-table>
        </div>
        <!-- 翻页 -->
        <!--上一页/下一页-->
        <div class="block data-flip-page">
        <el-pagination background layout="prev, pager, next"   :total="100">
            </el-pagination>
        </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                tableData:[],
                activeName:'',
                currentPage4: 4
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
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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
        margin-top: 20px;
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
    /*表格*/
    .data-total-container-table {
        width: 850px;
        box-sizing: border-box;
        margin: 20px auto 0 auto;
    }
    /* 翻页 */
    .el-pagination {
        text-align: center;
        margin-top: 10px;
    }
</style>


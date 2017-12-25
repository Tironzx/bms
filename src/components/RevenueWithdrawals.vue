<template>
  <div>
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
  </div>
</template>
<script>
    export default {
        data(){
            return {
                 tableData:[],
            }
        },
        mounted(){
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
    .data-total-container-table {
        width: 850px;
        box-sizing: border-box;
        margin: 20px auto 0 auto;
    }
</style>


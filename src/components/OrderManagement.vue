<template>
  <div>
    <el-tabs v-model="activeName" class="tabs" type="card">
        <el-tab-pane label="验证团购券" name="first">
            <code-coupons></code-coupons>
        </el-tab-pane>
        <el-tab-pane label="已消费团购券" name="second">
            <has-consumed></has-consumed>
        </el-tab-pane>
        <el-tab-pane label="未消费团购券" name="third">
            <not-spending></not-spending>
        </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
    import CodeCoupons from '../common/CodeCoupons'
    import HasConsumed from '../common/HasConsumed'
    import NotSpending from '../common/NotSpending'
    export default{
        data(){
            return {
                activeName:'first'
            }
        },
        components:{
            CodeCoupons,
            HasConsumed,
            NotSpending
        }
    }
</script>
<style scoped>
    .tabs {
        /* padding-left: 10px; */
    }

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
    
</style>


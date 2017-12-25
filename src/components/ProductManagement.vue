<template>
  <div>
    <p class="data-operating">您提交的信息我们将在24小时内（节假日除外）审核完成，请耐心等待</p>
    <el-tabs v-model="activeName" class="menuTitle" type="card">
        <el-tab-pane label="产品管理" name="first">
            <product-mange></product-mange>
        </el-tab-pane>
        <el-tab-pane label="添加产品" name="second">
            <product-add></product-add>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ProductMange from '../common/ProductMange'
import ProductAdd from '../common/ProductAdd'
    export default {
      data(){
        return {
          activeName:'first'
        }
      },
      components:{
        ProductMange,
        ProductAdd
      }
    }
</script>
<style scoped>
  /*老师管理/老师添加标题*/
    .data-operating {
      font-size: 14px;
      padding-left: 20px;
      color: #666;
      margin-bottom: 20px;
    }
</style>

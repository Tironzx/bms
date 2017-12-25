<template>
  <div>
    <p class="data-operating">您提交的信息我们将在24小时内（节假日除外）审核完成，请耐心等待</p>
    <el-tabs v-model="activeName" class="menuTitle" type="card">
        <el-tab-pane label="老师管理" name="first">
            <teacher-mange></teacher-mange>
        </el-tab-pane>
        <el-tab-pane label="老师添加" name="second">
            <teacher-add></teacher-add>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
    import TeacherMange from '@/common/TeacherMange'
    import TeacherAdd from '@/common/TeacherAdd'
   export default {
       data(){
           return {
               activeName:'first'
           }
       },
       components:{
           TeacherMange,
           TeacherAdd
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


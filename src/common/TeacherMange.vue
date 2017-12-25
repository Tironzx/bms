<template>
  <div>
        <!--老师管理-->
      <div class="data-teacher-management">
        <ul class="data-teacher-status">
          <li :class="{teacherStatus:allTeacher}" @click="AllTeacher">全部老师</li>
          <li :class="{teacherStatus:auditTeacher}" @click="AuditTeacher">待审核老师</li>
          <li :class="{teacherStatus:onlineTeacher}" @click="OnlineTeacher">上线老师</li>
        </ul>
        <!--老师列表-->
        <div class="data-teacher-show-information">
          <el-table :data="teacherShow" border style="width: 100%">
            <el-table-column prop="avatar" align="center" label="头像" width="140"></el-table-column>
            <el-table-column prop="teacherName" align="center" label="老师" ></el-table-column>
            <el-table-column prop="sex" align="center" label="性别"></el-table-column>
            <el-table-column prop="workType" align="center" label="类型"></el-table-column>
            <el-table-column prop="workDuration" align="center" label="从业年限"></el-table-column>
            <el-table-column prop="phone" align="center" label="电话" width="140"></el-table-column>
            <el-table-column prop="status" align="center" label="状态"  width="100"></el-table-column>
            <el-table-column label="操作" align="center">
              <template scope="scope">
                <el-button :class="[teacherInformation[scope.$index].status=='审核中'?dataTeacherDisabled:dataTeacherBtn]" @click.native.prevent="deleteRow(scope.$index, teacherInformation)" type="text" size="small">
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!--老师管理结束-->
  </div>
</template>

<script>
    export default {
        data(){
            return {
                allTeacher:true,
                auditTeacher:false,
                onlineTeacher:false,
                dataTeacherDisabled:"dataTeacherDisabled", //删除按钮禁用状态样式
                dataTeacherBtn:"dataTeacherBtn", //删除按钮有效样式
                teacherInformation:[
                  {avatar:1,teacherName:"李老师",sex:"男",workType:"音乐",workDuration:"3年",phone:18847589568,status:"审核中"},
                  {avatar:2,teacherName:"张老师",sex:"女",workType:"美术",workDuration:"3年",phone:18847589568,status:"审核成功"},
                  {avatar:3,teacherName:"王老师",sex:"男",workType:"书法",workDuration:"3年",phone:18847589568,status:"审核成功"}
                ],
                teacherShow:[]  //老师展示信息
            }
        },
        created(){
          this.teacherShow=this.teacherInformation;
        },
        methods:{
          // 全部老师
          AllTeacher(){
            this.teacherShow=[];
            this.teacherShow=this.teacherInformation; //将所有老师的信息赋值给teacherShow
            this.allTeacher=true;
            this.auditTeacher=false;
            this.onlineTeacher=false;
          },
          AuditTeacher(){ /*待审核老师*/
            this.teacherShow=[];
            this.auditTeacher=true;
            this.allTeacher=false;
            this.onlineTeacher=false;
            for(var item of this.teacherInformation){
              item.status=="审核中" && this.teacherShow.push(item);
            }
          },
          OnlineTeacher(){ /*上线老师*/
            this.teacherShow=[];
            this.onlineTeacher=true;
            this.allTeacher=false;
            this.auditTeacher=false;
            for(var item of this.teacherInformation){
              item.status=="审核成功" && this.teacherShow.push(item);
            }
          },
          deleteRow(index, rows) {
              if(this.teacherInformation[index].status=="审核成功"){
                this.$confirm("你确定要删除吗?").then(()=>{
                  rows.splice(index, 1);
                }).catch()
              }else{
                this.$alert("当前项目还在审核中，不可删除")
              }
          }
        }
    }  
</script>
<style scoped>
   .data-teacher-management{
      padding-top: 30px;
      padding-left: 50px;
      padding-right: 50px;
      box-sizing: border-box;
    }
    /*老师审核状态*/
    .data-teacher-status {
      display: flex;
      display: -webkit-flex;
      display: -webkit-box;
      display: -moz-flex;
      display: -ms-flex;
      display: -o-flex;
    }
    .data-teacher-status>li {
      font-size: 16px;
      width: 140px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #333;
      border: 1px solid #999;
      border-radius: 4px;
      margin-right: 20px;
      box-sizing: border-box;
      cursor: pointer;
    }
    /*鼠标点击切换老师状态查询*/
    .teacherStatus {
      color: #fff!important;
      background-color: #ea562d;
      border: 1px solid #ea562d !important;
    }
    /*老师信息展示表格*/
    .data-teacher-show-information {
      width: 100%;
      margin-top: 30px;
    }
    /*删除按钮样式禁用状态*/
    .dataTeacherDisabled {
      width: 60px;
      height: 26px;
      line-height: 10px;
      text-align: center;
      color: #fff;
      background-color: #999;
      border-radius: 4px;
      box-sizing: border-box;
    }
    /*删除按钮有效状态*/
    .dataTeacherBtn {
      width: 60px;
      height: 26px;
      line-height: 10px;
      text-align: center;
      color: #fff;
      background-color: #ea562d;
      border-radius: 4px;
      box-sizing: border-box;
    }
    /*上一页/下一页*/
    .data-flip-page {
      margin-top: 45px;
      margin-left: 35%;
    }
</style>

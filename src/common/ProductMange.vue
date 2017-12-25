<template>
  <div>
    <ul class="data-product-status">
        <li :class="{productStatus:allProduct}" @click="productAll">全部产品</li>
        <li :class="{productStatus:auditProduct}" @click="productAudit">待审核产品</li>
        <li :class="{productStatus:onlineProduct}" @click="productOnline">已上线产品</li>
    </ul>
    <!-- 产品展示 -->
    <div class="productShow">
        <el-table :data="productInformationShow" height="561" border style="width: 100%">
        <el-table-column prop="productName" align="center" label="产品名称" width="140"></el-table-column>
        <el-table-column prop="sales" align="center" label="销量(单)" ></el-table-column>
        <el-table-column prop="productType" align="center" label="类型"></el-table-column>
        <el-table-column prop="status" align="center" label="状态"></el-table-column>
        <el-table-column prop="changeTime" align="center" label="最近变更时间" width="140"></el-table-column>
        <el-table-column label="操作" align="center">
            <template scope="scope">
            <el-button :class="[productInformationShow[scope.$index].status=='审核中'?productDisabled:productBtn]" @click.native.prevent="deleteRow(scope.$index, productInformation)" type="text" size="small">
                {{productInformationShow[scope.$index].status=="审核中"?"上线":"下线"}}
            </el-button>
            </template>
        </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="pages">
            <el-pagination background layout="prev, pager, next" :current-page="currentPage" @current-change="changed" :total="tableLen">
            </el-pagination>
        </div>
        <!-- 分页结束 -->
    </div>
  </div>
</template>
<script>
   export default{
       data(){
           return{
               allProduct:true, //全部产品
               auditProduct:false, //待审核产品
               productAuditInfo:[], //待审核产品信息
               onlineProduct:false, //已上线产品
               onlineProductInfo:[], //已上线产品信息
               productDisabled:"productDisabled", //删除按钮禁用状态样式
               productBtn:"productBtn", //删除按钮有效样式
               productInformation:[], //服务端获得产品信息
               productInformationShow:[], //默认展示产品信息
               currentPage:1, //默认选中的页数
               tableLen:0
           }
       },
       created(){
           this.fetchData();
       },
       mounted(){
        //  this.productInformationShow=this.productInformation;
       },
       methods:{
           fetchData(){
               var _this=this;
               _this.$http.get('src/serverData/product.json').then((res)=>{
                    _this.productInformation=res.data;
                    _this.tableLen=_this.productInformation.length;
                    _this.productInformationShow=_this.productInformation.slice(0,10);
               }).catch((err)=>{
                   console.log("请求错误")
               })
           },
           productAll(){
               //全部产品
               this.currentPage=1;
               this.allProduct=true;
               this.auditProduct=false;
               this.onlineProduct=false;
               this.productInformationShow=[];
               this.productInformationShow=this.productInformation;
               this.tableLen=this.productInformationShow.length;
               this.productInformationShow=this.productInformation.slice(0,10);
           },
           productAudit(){
               //待审核产品
               this.currentPage=1;
               this.allProduct=false;
               this.auditProduct=true;
               this.onlineProduct=false;
               this.productInformationShow=[];
               this.productAuditInfo=[];
               for(var item of this.productInformation){
                   item.status=="审核中"&&this.productAuditInfo.push(item);
               }
               this.tableLen=this.productAuditInfo.length;
               this.productInformationShow=this.productAuditInfo.slice(0,10);
           },
           productOnline(){
            //    已上线产品
                this.currentPage=1;
                this.allProduct=false;
                this.auditProduct=false;
                this.onlineProduct=true;
                this.productInformationShow=[];
                this.onlineProductInfo=[];
                for(var item of this.productInformation){
                    item.status=="已上线"&&this.onlineProductInfo.push(item);
                }
                this.tableLen=this.onlineProductInfo.length;
                this.productInformationShow=this.onlineProductInfo.slice(0,10);
           },
           deleteRow(index, rows) {
              if(this.productInformationShow[index].status=="已上线"){
                  this.$confirm('确定要下线吗？').then(
                      ()=>{
                          this.productInformationShow[index].status="审核中";
                      }
                  ).catch()     
              }else {
                  this.$alert("该项目还在审核中...");
              }
          },
            //   分页
          changed(val){
              var start=0;
              if(val==1){
                  start=0
              }else{
                  start=val-1+"0";
                  start=Number(start);
              }
              if(this.allProduct==true){
                  this.productInformationShow=this.productInformation.slice(start,10*val);
              }else if(this.auditProduct==true){
                  this.productInformationShow=this.productAuditInfo.slice(start,10*val);
              }else if(this.onlineProduct==true){
                  this.productInformationShow=this.onlineProductInfo.slice(start,10*val);
              }
          }
        }
   } 
</script>
<style scoped>
    /*产品审核状态*/
    .data-product-status {
      display: flex;
      display: -webkit-flex;
      margin-left: 50px;
    }
    .data-product-status>li {
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
    .productStatus {
      color: #fff!important;
      background-color: #ea562d;
      border: 1px solid #ea562d !important;
    }
    /* 产品展示 */
    .productShow{
        width: 90%;
        margin: 30px auto 0 auto;
    }
    /*删除按钮样式禁用状态*/
    .productDisabled {
      width: 60px;
      height: 26px;
      line-height: 5px;
      text-align: center;
      color: #fff;
      background-color: #999;
      border-radius: 4px;
      box-sizing: border-box;
    }
    /*删除按钮有效状态*/
    .productBtn {
      width: 60px;
      height: 26px;
      line-height: 10px;
      text-align: center;
      color: #fff;
      background-color: #ea562d;
      border-radius: 4px;
      box-sizing: border-box;
    }
    /* 分页 */
    .pages {
        margin-top: 10px;
        text-align: center;
    }
</style>

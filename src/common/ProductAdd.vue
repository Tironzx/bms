<template>
  <div id="productAdd">
      <h4>选择产品类型</h4>
      <ul class="data-recautions">
        <li>1. 自助上产品如无法通过审核。请联系业务员。 </li>
        <li>2. 为了您更便捷的上单，智能模式将根据您的使用习惯，默认填写部分内容，您可以按照需要进行调整。</li>
      </ul>
      <ul class="data-cascading-menu">
        <li>选择一级品类</li>
        <li>选择二级品类</li>
      </ul>
      <div class="checkbox">
        <!-- 一级菜单 -->
        <div class="oneLevel">
          <ul>
            <li v-for="(item,index) in oneClassification" :key="index" @click="changed(index)">{{item}}</li>
          </ul>
        </div>
        <div class="switch">
          >>
        </div>
        <!-- 二级菜单 -->
        <div class="twoLevel">
          <ul>
            <li v-for="(item,index) in submenuInfo" :key="index" @click="changeLevel(index)">{{item}}</li>
          </ul>
        </div>
      </div>
      <!-- 方案类型 -->
      <p class="program">方案类型:<span>团购套餐</span></p>
      <div class="changeType">当前选择的类型:<span>{{changeOne}}</span>><span>{{changeTwo}}</span></div>
      <!-- 确定按钮 -->
      <div class="determine">
        <span @click="submit">确定</span>
      </div>
  </div>
</template>
<script>
   export default{
     data(){
       return{
         oneClassification:["音乐培训","文学培训","健身培训","艺术培训"], //一级菜单
         Submenu:[
           ["钢琴培训","吉他培训","小提琴培训","大提琴培训"],
           ["书法培训","古诗朗读培训"],
           ["游泳培训","瑜伽培训","肌肉拉伸"],
           ["油画培训","素描培训","水彩画培训"]
         ], //二级菜单
         submenuInfo:[],
         changeOne:'',
         changeTwo:''
       }
     },
     methods:{
       changed(index){ //一级菜单选择
         this.changeTwo='';
         var lis=document.querySelectorAll(".oneLevel ul li");
         for(var i=0;i<lis.length;i++){
           lis[i].style.backgroundColor="#fff";
         }
         lis[index].style.backgroundColor="#ddd";
         this.submenuInfo=this.Submenu[index];
         this.changeOne=this.oneClassification[index];
       },
       changeLevel(index){ //二级菜单选择
          var lis=document.querySelectorAll(".twoLevel ul li");
          for(var i=0;i<lis.length;i++){
            lis[i].style.backgroundColor="#fff";
          }
          lis[index].style.backgroundColor="#ddd";
          this.changeTwo=this.submenuInfo[index];
       },
       submit(){
        //  alert(this.changeOne);
         if(!(this.changeOne && this.changeTwo)){
           this.$alert("你还没有选择产品")
         }else{
           this.$alert("服务器维护中,暂不支持提交信息，请耐心等待...")
         }
       }
     }
   } 
</script>

<style scoped>
    #productAdd {
      padding-left: 50px;
      padding-top: 20px;
      box-sizing: border-box
    }
    #productAdd>h4 {
      font-size: 16px;
      color: #333;
      margin-bottom: 20px;
    }
    .data-recautions {
      font-size: 13px;
    }
    /*选择一二级分类*/
  .data-cascading-menu {
    display: flex;
    display: -webkit-flex;
    display: -webkit-box;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    margin-top: 30px;
  }
  .data-cascading-menu>li {
    font-size: 16px;
    font-weight: 600;
    margin-right: 150px;
  }
  /* 选择框 */
  .checkbox{
    margin-top: 20px;
    width: 100%;
    display: flex;
  }
  /* 一级分类 */
  .oneLevel {
    width: 200px;
    height: 220px;
    border: 1px solid #ddd;
    overflow: auto;
  }
  .oneLevel>ul,.twoLevel>ul {
    margin-top: 15px;
  }
  .oneLevel li,.twoLevel li {
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .oneLevel li:hover,.twoLevel li:hover {
    background-color: #ddd;
    cursor: default;
  }
  .switch {
    height: 220px;
    line-height: 220px;
    margin-left: 10px;
  }
  .twoLevel{
    margin-left: 10px;
    width: 200px;
    height: 220px;
    border: 1px solid #ddd;
  }
  /* 方案类型 */
  .program {
    font-size: 14px;
    margin-top: 20px;
  }
  .program span {
    color: #ea562d;
    padding-left: 10px;
  }
  .changeType {
    font-size: 14px;
    margin-top: 10px;
  }
  .changeType span {
    color: #ea562d;
    padding-left: 10px;
    padding-right: 10px;
  }
  /* 确定按钮 */
  .determine {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    border-top: 1px solid #ddd;
    background-color: #fff;
    box-sizing: border-box;
  }
  .determine span {
    /* display: inline-block; */
    position: absolute;
    right:20%;
    bottom: 25%;
    font-size: 14px;
    text-align: center;
    padding: 5px 15px;
    background-color: #ea562d;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
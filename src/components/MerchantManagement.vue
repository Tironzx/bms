<template>
  <div id="componyAdd">
      <div class="content">
        <ul class="data-basic-information">
            <li>
                <label for="ShopName">门店名称</label>
                <input type="text" id="ShopName" placeholder="请填写门店名称">
            </li>
            <li>
                <label for="callPhone">联系电话</label>
                <input type="text" id="callPhone" placeholder="请填写联系电话">
            </li>
            <li>
                <label for="shopAddress">门店街道</label>
                <input type="text" id="shopAddress" placeholder="请填写门店详细地址">
            </li>
            <li>
                <label for="BusinessDistrict">门店商圈</label>
                <input type="text" id="BusinessDistrict" placeholder="请填写门店商圈">
            </li>
            <li>
                <label for="OperatingStatus">经营状态</label>
                <select id="OperatingStatus">
                <option :value="1">营业中</option>
                <option :value="1">已关门</option>
                </select>
            </li>
            <li class="data-teacherIntroduction">
                <label for="CompanyProfile">公司介绍</label>
                <input type="text"  id="CompanyProfile" placeholder="请填写公司简介">
                <span>0/30</span>
            </li>
        </ul>
        <!--图片上传提示-->
        <ul class="data-img-upload-precautions">
            <li>1.单张图片大小不能超过 20MB</li>
            <li>2.上传jpg或png格式的图片，其他格式的文件易压缩失败导致上传出错</li>
            <li>3.请勿盗用他人图片</li>
            <li>4.请勿上传违法，违规图片尺寸太小的图片将不会在网站上显示</li>
        </ul>
        <!--图片上传-->
        <p class="data-teacher-img-show">商家logo</p>
        <!-- 上传图片 -->
        <div class="imgUpload">
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
        <!-- 上传结束 -->
    </div>
    <!--页尾阅览/提交-->
    <div class="data-submit">
      <div class="data-reading-submit">
        <ul>
          <li><a href="#" @click.prevent="submit">提交</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          dialogImageUrl: '',
          dialogVisible: false
        }
      },
      methods: {
          handleRemove(file, fileList) {
            alert(2);
            console.log(file, fileList);
          },
          handlePictureCardPreview(file) {
            alert(1);
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
          submit(){
            this.$alert("系统维护中,请稍后再试...")
          }
      }
    }
</script>

<style scoped>
    #componyAdd {
        padding-left: 20px;
    }
    .content {
        margin-bottom: 70px;
    }
    老师添加
    .data-teacher-add {
      padding-top: 30px;
      padding-left: 50px;
      box-sizing: border-box;
    }
    /*老师基本信息*/
    .data-basic-information>li {
      margin-bottom: 15px;
    }
    .data-basic-information>li>label {
      display: inline-block;
      width: 85px;
      height: 35px;
      line-height: 35px;
      font-size: 16px;
    }
    .data-basic-information>li>input {
      display: inline-block;
      width: 240px;
      height: 36px;
      padding-left: 10px;
      font-size: 16px;
      color: #333;
      border: 1px solid #999;
      box-sizing: border-box;
      border-radius: 4px;
    }
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
      color: #666;
    }
    input:-moz-placeholder, textarea:-moz-placeholder {
      color: #666;
    }
    input::-moz-placeholder, textarea::-moz-placeholder {
      color: #666;
    }
    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
      color: #666;
    }
    select {
      /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
      border: 1px solid #999;
      width: 240px;
      height: 36px;
      padding-left: 10px;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 16px;
      /*很关键：将默认的select选择框样式清除*/
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      /*在选择框的最右侧中间显示小箭头图片*/
      background: url("../assets/img/pull-down.png") no-repeat 215px center;
      /*为下拉小箭头留出一点位置，避免被文字覆盖*/
      padding-right: 20px;
    }
    /*清除ie的默认选择框样式清除，隐藏下拉箭头*/
    select::-ms-expand { display: none; }
    /*公司介绍*/
    .data-teacherIntroduction {
      position: relative;
    }
    #CompanyProfile {
      width: 785px;
    }
    .data-teacherIntroduction>span {
      position: absolute;
      right: 9%;
      top: 10px;
      color: #999;
      font-size: 12px;
    }
    .data-img-upload-precautions {
      font-size: 13px;
      color: #333;
      margin-top: 50px;
    }
  /*商家logo*/
  .data-teacher-img-show {
    margin-top: 30px;
    font-size: 16px;
  }
  /*阅览/提交*/
  .data-submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
    width: 100%;
    height: 70px;
    border-top: 1px solid #999;
    background-color: #fff;
  }
  .data-reading-submit {
    width: 1200px;
    margin: 0 auto;
  }
  .data-reading-submit>ul {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    margin-top: 20px;
    margin-left: 900px;
  }
  .data-reading-submit>ul a{
    display: block;
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: #ea562d;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
    border-radius: 4px;
  }
  /* 图片上传 */
  .imgUpload {
    margin-top: 10px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  /*老师添加结束*/

</style>



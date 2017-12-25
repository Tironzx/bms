<template>
  <div>
      <!-- 头部 -->
      <Header></Header>
      <div class="data-content">
          <div class="data-content-text">
              <el-row :gutter="1">
                  <!-- 左侧菜单栏 -->
                <el-col :span="4"><div class="grid-content bg-purple leftSide">
                    <left-nav></left-nav>
                </div></el-col>
                <transition name="fade">
                <el-col :span="20"><div class="grid-content bg-purple data-content-rside">
                     <index-content v-show="homeShow"></index-content>
                    <!-- <transition name="fade"> -->
                        <router-view></router-view>
                    <!-- </transition> -->
                </div></el-col>
                 </transition>
              </el-row>
          </div>
      </div>
  </div>
</template>
<script>
    import Header from '../common/Header'
    import LeftNav from '../common/LeftNav'
    import IndexContent from '../common/IndexContent'
    import {mapGetters,mapActions} from 'vuex'
    export default{
        computed:mapGetters([
            'homeShow'
        ]),
        watch:{
            $route(to,from){
                if(to.path=="/index"){
                    this.$store.dispatch('homeShow');
                }else{
                   this.$store.dispatch('homeHide'); 
                }
            }
        },
        data(){
            return{

            }
        },
        methods:{

        },
        components:{
            Header,
            LeftNav,
            IndexContent
        }
    }
</script>
<style scoped>
    /* 页面主体 */
    .data-content {
        width: 1200px;
        margin: 0 auto;
    }
    .data-content-text {
        margin-top: 20px;
    }
    /*右侧内容*/
  .data-content-rside {
    background: #FFFFFF;
    margin-left: 20px;
    padding-top: 40px;
    padding-bottom: 50px;
    min-height: 800px;
    box-sizing: border-box;
  }
  .leftSide {
      height: 800px;
      background-color: #fff;
  }
  /* 动画 */
  fade-enter-active, .fade-leave-active {
    transition: all .5s linear;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0;
    /* transform: translate(500px,500px); */
    /* transform: rotateX(180deg) */
  }
</style>

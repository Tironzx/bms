import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Header from '@/common/Header'
import IndexContent from '@/common/IndexContent'
import PassWord from '@/components/PassWord'
import OrderManagement from '@/components/OrderManagement'
import Login from '@/components/Login'
import RevenueAccounting from '@/components/RevenueAccounting' /**收益核算*/
import RevenueWithdrawals from '@/components/RevenueWithdrawals' /*收益提现 */
import ProductManagement from '@/components/ProductManagement' /**产品管理 */
import MerchantManagement from '@/components/MerchantManagement' /**商家管理 */
import TeacherManagement from '@/components/TeacherManagement' /**老师管理 */
Vue.use(Router)

export default new Router({
  mode:'history',
  scrollBehavior:()=>({
     y:0  //跳转到页面顶部
  }),
  routes: [{
      path:'*',
      redirect:'index'
    },
    {
      path: '/',
      component:Login
    },{
      path:'/index',
      component:Index,
      children:[{
        path:'/indexContent',
        component:IndexContent
      },{
        path:'/passwd',
        component:PassWord
      },{
        path:'/order',
        component:OrderManagement
      },{
        path:'/accounting',
        component:RevenueAccounting
      },{
        path:'/withdrawal',
        component:RevenueWithdrawals
      },{
        path:'/product',
        component:ProductManagement
      },{
        path:'/merchant',
        component:MerchantManagement
      },{
        path:'/teacher',
        component:TeacherManagement
      }]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import SelectPostion from '@/pages/SelectPostion'
import Question from '@/pages/Question'
import Order from '@/pages/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
      name: 'login',
    },
    {
      path: '/selectPostion',
      component: SelectPostion,
      name: 'select-postion',
    },
    {
      path: '/question',
      component: Question,
      name: 'question',
    },
    {
      path: '/order',
      component: Order,
      name: 'order',
    },
    {
      path: '/order/accepted',
      component: Order,
      name: 'accpetedOrder',
    },
  ]
})

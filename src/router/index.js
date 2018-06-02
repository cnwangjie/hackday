import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import SelectPostion from '@/pages/SelectPostion'

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
  ]
})

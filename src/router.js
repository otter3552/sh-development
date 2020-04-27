import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Main from './views/MainFrame'

Vue.use(Router) 

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Login,
    },
    {
      path: '/main',
      name : 'main',
      component : Main
    }
  ]
})


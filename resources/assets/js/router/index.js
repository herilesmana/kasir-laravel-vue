import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/login/Welcome'
import LoginAdmin from '../components/login/Login-admin'
import LoginKasir from '../components/login/Login-kasir'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/admin',
      name: 'Admin',
      component: LoginAdmin
    },
    {
      path: '/kasir',
      name: 'Kasir',
      component: LoginKasir
    }
  ]
})

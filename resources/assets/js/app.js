require('./bootstrap');

window.Vue = require('vue');

import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../css/animate.css'

Vue.use(iView)

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
});

Vue.config.productionTip = false

Vue.component('login', require('./components/Login.vue'))
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router
})

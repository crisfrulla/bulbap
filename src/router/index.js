import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Locations from '@/components/Locations'
import FileNotFound from '@/components/FileNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home, meta: { scrollToTop: true } },
    { path: '/menu', component: Menu },
    { path: '/locations', component: Locations },
    { path: '*', component: FileNotFound }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})

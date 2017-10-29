import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Locations from '@/components/Locations'
import WorkAtBulbap from '@/components/WorkAtBulbap'
import Catering from '@/components/Catering'
import FileNotFound from '@/components/FileNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/', component: Home, meta: { scrollToTop: true } },
    { path: '/menu', component: Menu },
    { path: '/locations', component: Locations },
    { path: '/work-at-bulbap', component: WorkAtBulbap },
    { path: '/catering', component: Catering },
    { path: '*', component: FileNotFound }
  ]
})

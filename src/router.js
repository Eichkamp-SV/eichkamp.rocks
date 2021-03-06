import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import Home from './views/Home.vue'
import Events from './views/Events.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }  
})
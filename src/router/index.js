import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from "../views/About";
import Tour from "../views/Tour"
import Calender from "../views/Calender";
import More from "../views/More";
// import Test from "../views/tester"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      index: 0
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      index: 1
    }
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour,
    meta: {
      index: 2
    }
  },
  {
    path: '/calender',
    name: 'Calender',
    component: Calender,
    meta: {
      index: 3
    }
  },
  {
    path: '/more',
    name: 'More',
    component: More,
    meta: {
      index: 4
    }
  },
  // {
  //   path: '/test',
  //   name:'Test',
  //   component: Test,
  //   meta:{
  //     index: 5
  //   }
  // }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CarView from '../views/CarView.vue'
import TeamView from '../views/TeamView.vue'
import AboutView from '../views/AboutView.vue'

import ReviewView from '../views/ReviewView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cars',
    name: 'cars',
    component: CarView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/review',
    name: 'review',
    component: ReviewView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

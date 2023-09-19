import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/profile/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/direct',
      name: 'direct',
      component: () => import(/*webpackChunkName:"profile"*/ '@/views/direct/index.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import(/*webpackChunkName:"profile"*/ '@/views/explore/index.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/*webpackChunkName:"profile"*/ '@/views/profile/index.vue'),
      children: [
        {
          path: '',
          name: 'post',
          component: () => import(/*webpackChunkName:"profile"*/ '@/views/profile/Post.vue')
        },
        {
          path: '/igtv',
          name: 'igtv',
          component: () => import(/*webpackChunkName:"profile"*/ '@/views/profile/igtvPage.vue')
        },
        {
          path: '/save',
          name: 'profileSAVE',
          component: () => import(/*webpackChunkName:"profile"*/ '@/views/profile/Save.vue')
        },
        {
          path: '/tag',
          name: 'profileTAG',
          component: () => import(/*webpackChunkName:"profile"*/ '@/views/profile/Tag.vue')
        }
      ]
    }
  ]
})

export default router

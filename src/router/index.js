import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/profile/index.vue'
import Post from '@/views/profile/Post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        }
      ]
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
          name: 'profileIGTV',
          component: () => import(/*webpackChunkName:"profile"*/ '@/views/profile/igtvpage.vue')
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

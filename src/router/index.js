import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/direct',
      name: 'direct',
      component: () => import('@/views/direct/index.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('@/views/explore/index.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/profile/index.vue'),
      children: [
        {
          path: '',
          name: 'post',
          component: () => import('@/views/profile/Post.vue')
        },
        {
          path: 'igtv',
          name: 'igtv',
          component: () => import('@/views/profile/igtvPage.vue')
        },
        {
          path: 'save',
          name: 'profileSAVE',
          component: () => import('@/views/profile/Save.vue')
        },
        {
          path: 'tag',
          name: 'profileTAG',
          component: () => import('@/views/profile/Tag.vue')
        }
      ]
    }
  ]
})

export default router

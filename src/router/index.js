import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '/',
      component: ()=>import('@/views/home/index.vue')
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('@/views/explore/index.vue')
    },
    {
      path: '/reels',
      name: 'reels',
      component: () => import('@/views/reels/index.vue')
    },
    {
      path: '/direct',
      name: 'direct',
      component: () => import('@/views/direct/index.vue')
    },
    {
      path: '/like',
      name: 'like',
      component: () => import('@/views/like/index.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/create/index.vue')
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

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/SignInView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/SignUpView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/SettingsView.vue')
    },
    {
      path: '/editor',
      name: 'create',
      component: () => import('@/views/EditorView.vue')
    },
    {
      path: '/editor/:slug',
      name: 'editor',
      component: () => import('@/views/EditorView.vue')
    },
    {
      path: '/article/:slug',
      name: 'article',
      component: () => import('@/views/ArticleView.vue')
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')
    }
  ]
})

export default router

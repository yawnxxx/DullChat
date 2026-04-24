import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Chat',
    component: () => import('@/views/Chat.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  },
  {
    path: '/prompts',
    name: 'PromptLibrary',
    component: () => import('@/views/PromptLibrary.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Login.vue') },
  { path: '/control-panel', component: () => import('../views/ControlPanel.vue') },
  { path: '/user/:id', component: () => import('../views/UserPanel.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

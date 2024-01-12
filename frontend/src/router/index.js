import { createRouter, createWebHistory } from 'vue-router'
import { getLoggedUser } from '../services/login';

const routes = [
  { path: '/', component: () => import('../views/Login.vue'), meta: { verifyLogin: true } },
  { path: '/control-panel', component: () => import('../views/ControlPanel.vue'), meta: { authAdmin: true } },
  { path: '/user/:id', component: () => import('../views/UserPanel.vue'), props: true, meta: { authUser: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach( async (to, _from, next) => {
  try {
    const user = await getLoggedUser();
    if (to.meta.verifyLogin && user.isAdmin) return next('/control-panel')
    if (to.meta.verifyLogin && !user.isAdmin) return next('/user/' + user.id)
    if (to.meta.authAdmin && user.isAdmin) return next()
    if (to.meta.authUser && user.isAdmin || user.id === to.params.id) return next()
    return next()
  } catch {
    return next('/')
  }
});

export default router

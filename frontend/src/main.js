import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Login from './views/Login.vue'
import ControlPanel from './views/ControlPanel.vue'
import UserPanel from './views/UserPanel.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Login},
  { path: '/control-panel', component: ControlPanel },
  { path: '/user/:id', component: UserPanel},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
.use(router)
.mount('#app')

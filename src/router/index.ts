import { createRouter, createWebHistory } from 'vue-router'
import Connexion from '../pages/connexion.vue'
import Connect from '../pages/connect.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    { path: '/connexion', name: 'connexion', component: Connexion },
    { path: '/connect', name: 'connect', component: Connect },
  ]
})

export default router

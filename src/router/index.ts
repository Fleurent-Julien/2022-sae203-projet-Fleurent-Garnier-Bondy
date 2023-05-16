import { createRouter, createWebHistory} from 'vue-router'
import Forum from '../pages/forum.vue'
import Accueil from '../pages/accueil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/forum', component: Forum },
    { path: '/accueil', component: Accueil },
  ]
})

export default router

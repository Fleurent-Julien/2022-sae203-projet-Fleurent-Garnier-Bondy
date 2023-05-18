import { createRouter, createWebHistory} from 'vue-router'
import Forum from "@/pages/forum.vue"
import MentionsLegales from '@/pages/mentions_legales.vue'
import Contact from '@/pages/contact.vue'
import Inscription from '@/views/inscription.vue'
import Connexion from '@/views/connexion.vue'
import Index from '@/views/accueil.vue'
import Conseil from '@/pages/conseil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/index', name: 'index', component: Index },
    { path: '/forum', name: 'forum', component: Forum },
    { path: '/mentions_legales', component: MentionsLegales },
    { path: '/contact', component: Contact },
    { path: '/inscription', component: Inscription },
    { path: '/connexion', component: Connexion },
    { path: '/conseil', component: Conseil },
  ]
})

export default router

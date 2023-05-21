import { createRouter, createWebHistory} from 'vue-router'
import Forum from "@/pages/forum.vue"
import MentionsLegales from '@/pages/mentions_legales.vue'
import Contact from '@/pages/contact.vue'
import Inscription from '@/views/inscription.vue'
import Connexion from '@/views/connexion.vue'
import Accueil from '@/pages/index.vue'
import Conseil from '@/pages/conseil.vue'
import Recettes from '@/pages/recettes.vue'
import Compte from '@/pages/compte.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Accueil },
    { path: '/forum', name: 'forum', component: Forum },
    { path: '/mentions_legales', component: MentionsLegales },
    { path: '/contact', component: Contact },
    { path: '/inscription', component: Inscription },
    { path: '/connexion', component: Connexion },
    { path: '/conseil', component: Conseil },
    { path: '/recettes', component: Recettes },
    { path: '/compte', component: Compte }
  ]
})

export default router

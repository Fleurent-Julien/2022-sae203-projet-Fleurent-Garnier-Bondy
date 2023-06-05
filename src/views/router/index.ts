import { createRouter, createWebHistory} from 'vue-router'
import Forum from "@/pages/forum.vue"
import MentionsLegales from '@/pages/mentions_legales.vue'
import Contact from '@/pages/contact.vue'
import Inscription from '@/views/inscription.vue'
import Connexion from '@/views/connexion.vue'
import Accueil from '@/pages/index.vue'
import Conseil from '@/pages/conseil.vue'
import Recettes from '@/pages/recette/index.vue'
import Compte from '@/pages/compte.vue'
import Page404 from '@/pages/[...page404].vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name:'accueil', component: Accueil },
    { path: '/forum', name: 'forum', component: Forum },
    { path: '/mentions_legales', name:'mentions_legales', component: MentionsLegales },
    { path: '/contact', name:'contact',component: Contact },
    { path: '/inscription', name:'inscription', component: Inscription },
    { path: '/connexion', name:'connexion', component: Connexion },
    { path: '/conseil', name:'conseil', component: Conseil },
    { path: '/recettes', name:'recettes', component: Recettes },
    { path: '/compte', name: 'compte',  component: Compte },
    { path: '/*', name: 'page404',  component: Page404 },
  ]
})

export default router

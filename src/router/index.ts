import { createRouter, createWebHistory} from 'vue-router'
import Forum from "@/pages/forum.vue"
import Accueil from "@/pages/accueil.vue"
import MentionsLegales from '@/pages/mentions_legales.vue'
import Contact from '@/pages/contact.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/forum', name: 'forum', component: Forum },
    { path: '/accueil', component: Accueil },
    { path: '/mentions_legales', component: MentionsLegales },
    { path: '/contact', component: Contact },
    { path: '/connexion', redirect: '/contact', component: Connexion},
    { path: '/404', name: 'NotFound', component: NotFound },
    { path: '/:catchAll(.*)', redirect:'404'}
  ]
})

export default router

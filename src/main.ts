import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import '../src/css/style.css'
import { createHead } from "@unhead/vue"

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top : 0}
    },
  }),
)

const head = createHead()
app.use(head)

app.mount('#app')
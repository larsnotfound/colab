import { createWebHistory, createRouter } from "vue-router";
import home from '../pages/Home.vue'
import about from '../pages/about.vue'
import spaces from '../pages/spaces.vue'
import events from '../pages/events.vue'
import focusarea from '../pages/focusarea.vue'
import contact from '../pages/contact.vue'

const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/about', name: 'about', component: about },
    { path: '/spaces', name: 'spaces', component: spaces },
    { path: '/events', name: 'events', component: events },
    { path: '/focusarea', name: 'focusarea', component: focusarea },
    { path: '/contact', name: 'contact', component: contact },
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router
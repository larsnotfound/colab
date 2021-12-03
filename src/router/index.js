import { createWebHistory, createRouter } from "vue-router";
import home from '../pages/Home.vue'
import aboutus from '../pages/aboutus.vue'
import cases from '../pages/cases.vue'
import location from '../pages/location.vue'
import contact from '../pages/contact.vue'

const routes = [
    { path: '/', name: 'home', component: home },
    { path: '/aboutus', name: 'aboutus', component: aboutus },
    { path: '/cases', name: 'cases', component: cases },
    { path: '/location', name: 'location', component: location },
    { path: '/contact', name: 'contact', component: contact },
]

const router = new createRouter({
    history: createWebHistory(),
    routes,
})

export default router
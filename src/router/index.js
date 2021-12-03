import { createWebHistory, createRouter } from "vue-router";
import home from '../components/Home.vue'
import aboutus from '../components/aboutus.vue'
import cases from '../components/cases.vue'
import location from '../components/location.vue'
import contact from '../components/contact.vue'

const routes = [
    { path: '/home', name: 'home', component: home },
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
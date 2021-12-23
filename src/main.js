import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import router from './router/index'

createApp(App).use(router).mount('#app')
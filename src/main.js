import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './assets/styles/main.css'

import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
    license: import.meta.env.VITE_PRIMEUI_LICENSE
})

app.mount('#app')
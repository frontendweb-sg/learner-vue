import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { appRoutes } from './routes'
import './global.css'

// create app instance
const app = createApp(App)

// store
app.use(createPinia())

// routes
app.use(appRoutes)

// mount app into container
app.mount('#app')

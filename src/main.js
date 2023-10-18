import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/style.scss'


const app = createApp(App)
app.use(router)
app.mount('#app')


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Farhan Ahmad';
    next();
  })
  
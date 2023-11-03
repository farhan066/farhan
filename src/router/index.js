import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/games',
    name: 'games',
    component: GamesView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   // Add your function here that you want to run on route change or page refresh
//   this.$root.animate()

//   next()
// })

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import BlogView from '../views/BlogView.vue'
import ProjectsView from '../views/ProjectsView.vue'

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
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/drv',
    component: {
      beforeRouteEnter() {
        window.location.href = 'https://drive.google.com/drive/folders/1aiIHBW-7m7AEdhxv1pxQ3g8O0WNNpz_v?usp=sharing'
      },
      render: () => null
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

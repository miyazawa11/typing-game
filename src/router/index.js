import { createRouter, createWebHistory } from 'vue-router'
import TypingStartVue from '../views/TypingStart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: TypingStartVue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/TypingGame.vue')
    }
  ]
})

export default router

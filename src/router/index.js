import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import TasksView from '../views/TasksView.vue'
import ReviewsView from '../views/ReviewsView.vue'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

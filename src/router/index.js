import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '../views/addProject.vue'
import EditProject from '../views/EditProject.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject
  },
  {
    path: '/add-project',
    name: 'AddProject',
    component: AddProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

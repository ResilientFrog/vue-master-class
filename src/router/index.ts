import HomeView from '@/views/HomeView.vue'
import { h } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'home',
    component : HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    component : () => import('@/views/ProjectsView.vue')
  },
  {
    //wild card: :id
    path: '/projects/:id',
    name: 'single-project',
    component : () => import('@/views/SingleProjectVue.vue')
  },
  // wildcard for catching all unkonw path with nested destinations
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component : h('p',{style:'color: black;'},'404 Not Found')
  }
],
})

export default router

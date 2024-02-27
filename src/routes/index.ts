import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/Admin.vue'),
    alias: ['/admin', '/admin/dashboard'],

    children: [
      {
        path: '',
        component: () => import('@/views/admin/dashboard/index.vue'),
        name: 'Dasboard'
      }
    ]
  }
]

export const appRoutes = createRouter({
  routes,
  history: createWebHistory(),
  strict: true
})

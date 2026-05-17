import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Faq from './views/Faq.vue'
import Contact from './views/Contact.vue'
import NotFound from './views/NotFound.vue'
import Dashboard from './views/Dashboard.vue'
import Attendance from './views/Attendance.vue'
import WorkingTime from './views/WorkingTime.vue'
import Support from './views/Support.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/faq', name: 'Faq', component: Faq },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/login', name: 'Login', component: () => import('./views/Login.vue') },
  { path: '/register', name: 'Register', component: () => import('./views/Register.vue') },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/attendance', name: 'Attendance', component: Attendance, meta: { requiresAuth: true } },
  { path: '/working-time', name: 'WorkingTime', component: WorkingTime, meta: { requiresAuth: true } },
  { path: '/support', name: 'Support', component: Support, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('auth_token')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router


import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'


export const routes = [
  { 
    name: 'Home',
    path: '/', 
    component: Home 
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from '../plugins/firebase';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: () => import('../views/Onboarding.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/login/SignUp.vue'),
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/login/ForgotPassword.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'supply',
        name: 'supply',
        component: () => import('../views/dashboard/Supply.vue'),
      },
      {
        path: 'demand',
        name: 'demand',
        component: () => import('../views/dashboard/Demand.vue'),
      },
      {
        path: 'distribute',
        name: 'distribute',
        component: () => import('../views/dashboard/Distribute.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const { currentUser } = firebase.auth();

  if (requiresAuth && !currentUser) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && currentUser) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;

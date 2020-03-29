import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: () => import('../views/Onboarding.vue'),
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/Team.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/login/SignUp.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/login/ForgotPassword.vue'),
  },
  {
    path: '/about',
    name: 'about',
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
  const { user } = store.state;

  if (requiresAuth && !user) {
    next({ name: 'login' });
  } else if (to.name === 'login' && user) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

export default router;

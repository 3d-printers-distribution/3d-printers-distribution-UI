import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: 'onboarding',
    name: 'Onboarding',
    component: () => import('../views/Onboarding.vue'),
  },
  {
    path: 'contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: 'about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
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

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import { loadLocale } from '../plugins/i18n';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/:lang',
  component: { render: (h) => h('router-view') },
  children: [
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
  ],
}];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  const language = to.params.lang;

  // Redirect to default locale if no language is set
  if (!language) next(`en_US${to.fullPath}`);

  loadLocale(language);
  next();
});

export default router;

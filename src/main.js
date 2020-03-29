import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import firebase from './plugins/firebase';

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      i18n,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app');
  }
});

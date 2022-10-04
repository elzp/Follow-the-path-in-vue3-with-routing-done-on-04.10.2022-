const { createApp } = require('vue');
// import Vue from 'vue';

import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import RouterView from './components/RouterView';

const members = [
  { id: 1, first_name: 'Adam', last_name: 'Gospodarczyk', role: 'Member' },
  { id: 2, first_name: 'Przemek', last_name: 'Smyrdek', role: 'Member' },
  { id: 3, first_name: 'Marcin', last_name: 'Czarkowski', role: 'Member' },
];

const routes = [{ path: '/members/:id', component: RouterView }];
const router = createRouter({
  //VueRouter.
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  //VueRouter.
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);

app.mount('#app');

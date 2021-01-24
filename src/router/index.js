import Vue from 'vue';
import VueRouter from 'vue-router';

import { mainRoutes } from '@/Main';

Vue.use(VueRouter);

const routes = [
  ...mainRoutes,
];

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

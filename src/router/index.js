import { createWebHistory, createRouter } from 'vue-router';

import { routes as MainRoutes } from '../Main';

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    ...MainRoutes,
  ],
});

export default router;

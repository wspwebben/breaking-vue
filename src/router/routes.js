import { wrapMainLayout } from '/@/Layout/routes';

import { routes as episodeRoutes } from '/@/Episode/routes';

export const routes = [
  wrapMainLayout(
    episodeRoutes,
  )
];

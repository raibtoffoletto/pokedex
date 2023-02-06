import Layout from '@components/App/Layout';
import { APP_ROUTES } from '@constants';
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

/**
 * Lazy load routes for better app performance.
 */

const Favorites = lazy(() => import('@views/Favorites'));

const NotFound = lazy(() => import('@views/NotFound'));

const Pokedex = lazy(() => import('@views/Pokedex'));

const Pokemon = lazy(() => import('@views/Pokemon'));

/**
 * Set up basic routes for the app
 * and wrap them in main layout.
 */
export default function Router() {
  const routes = useRoutes([
    {
      path: APP_ROUTES.BASE,
      children: [
        {
          index: true,
          element: <Pokedex />,
        },
        {
          path: ':pokemon',
          element: <Pokemon />,
        },
      ],
    },
    {
      path: APP_ROUTES.FAVORITES,
      element: <Favorites />,
    },
    {
      path: APP_ROUTES[404],
      element: <NotFound />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <Layout>{routes}</Layout>;
}

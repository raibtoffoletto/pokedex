import Layout from '@components/App/Layout';
import { APP_ROUTES } from '@constants';
import { useRoutes } from 'react-router-dom';

/**
 * Set up basic routes for the app
 * and wrap them in main layout.
 */
export default function Router() {
  const routes = useRoutes([
    {
      path: APP_ROUTES.BASE,
      element: <>list</>,
    },
    {
      path: `${APP_ROUTES.BASE}':pokemon'`,
      element: <>poke</>,
    },
    {
      path: APP_ROUTES.FAVORITES,
      element: <>favs</>,
    },
    {
      path: '*',
      element: <>not found</>,
    },
  ]);

  return <Layout>{routes}</Layout>;
}

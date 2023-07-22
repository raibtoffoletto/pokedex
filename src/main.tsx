import Fallback from '@components/Fallback';
import { ProvideFavorites } from '@hooks/useFavorites';
import { ProvidePokedex } from '@hooks/usePokedex';
import { ProvideTheme } from '@hooks/useTheme';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { worker } from './tests/msw/server';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root component not found.');
}

if (`${import.meta.env.VITE_MSW}`.toLowerCase() === 'true') {
  worker.start({ quiet: true });
}

/**
 * Set up context providers for theming,
 * favorites, api and routing.
 */
ReactDOM.createRoot(root).render(
  <ProvideTheme>
    <ProvidePokedex>
      <ProvideFavorites>
        <Suspense fallback={<Fallback />}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Suspense>
      </ProvideFavorites>
    </ProvidePokedex>
  </ProvideTheme>
);

import Fallback from '@components/Fallback';
import { ProvidePokedex } from '@hooks/usePokedex';
import { ProvideTheme } from '@hooks/useTheme';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root component not found.');
}

/**
 * Set up context providers for theming,
 * favorites, api and routing.
 */
ReactDOM.createRoot(root).render(
  <ProvideTheme>
    <ProvidePokedex>
      <Suspense fallback={<Fallback />}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Suspense>
    </ProvidePokedex>
  </ProvideTheme>
);

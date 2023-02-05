import { ProvideTheme } from '@hooks/useTheme';
import { CircularProgress } from '@mui/material';
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
 * and routing.
 */
ReactDOM.createRoot(root).render(
  <ProvideTheme>
    <Suspense fallback={<CircularProgress size="5rem" />}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  </ProvideTheme>
);

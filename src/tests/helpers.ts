import { vi } from 'vitest';

export * from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';

export const navigate = vi.fn();

export function setUpRouter() {
  vi.mock('react-router-dom', () => {
    return {
      useNavigate: () => navigate,
    };
  });
}

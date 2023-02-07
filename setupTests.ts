import '@testing-library/jest-dom';
import { vi } from 'vitest';

export const navigate = vi.fn();

export function setUpRouter() {
  vi.mock('react-router-dom', () => {
    return {
      useNavigate: () => navigate,
    };
  });
}

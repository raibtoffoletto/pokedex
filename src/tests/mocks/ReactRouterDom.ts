import { vi } from 'vitest';

export const navigate = vi.fn();

vi.mock('react-router-dom', () => {
  return {
    useNavigate: () => navigate,
  };
});

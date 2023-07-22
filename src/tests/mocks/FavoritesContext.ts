import { vi } from 'vitest';

let isFaved = false;

export const isFavorite = vi.fn(() => isFaved);

export const toggleFavorite = vi.fn(() => (isFaved = !isFaved));

vi.mock('@hooks/useFavorites', () => {
  return {
    useFavorites: () => ({ isFavorite, toggleFavorite }),
  };
});

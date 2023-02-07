import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { navigate, setUpRouter } from '@tests';
import { describe, expect, it, vi } from 'vitest';
import Card from './Card';

let isFaved = false;
const isFavorite = vi.fn(() => isFaved);
const toggleFavorite = vi.fn(() => (isFaved = !isFaved));

setUpRouter();

vi.mock('@hooks/useFavorites', () => {
  return {
    useFavorites: () => ({ isFavorite, toggleFavorite }),
  };
});

describe('pokemon card component', () => {
  beforeEach(() => {
    navigate.mockReset();
  });

  it('should render name and id', () => {
    render(<Card id={13} name="friday pokemon" />);

    expect(screen.getByText(/friday pokemon/i)).toBeInTheDocument();
    expect(screen.getByText(/#00013/i)).toBeInTheDocument();
  });

  it('should navigate to pokemon page on card click', async () => {
    render(<Card id={1} name="pokemon" />);

    const user = userEvent.setup();

    await user.click(screen.getByLabelText('pokemon'));

    expect(navigate).toBeCalledTimes(1);
    expect(toggleFavorite).toBeCalledTimes(0);
  });

  it('should toggle favorite status for pokemon', async () => {
    const { rerender } = render(<Card id={1} name="pokemon" />);

    const user = userEvent.setup();

    const button = screen.getByLabelText(/^toggle favorite.*/i);

    expect(screen.queryByTestId('FavoriteBorderIcon')).toBeTruthy();
    expect(screen.queryByTestId('FavoriteIcon')).toBeFalsy();

    await user.click(button);

    rerender(<Card id={1} name="pokemon" />);

    expect(screen.queryByTestId('FavoriteIcon')).toBeTruthy();
    expect(screen.queryByTestId('FavoriteBorderIcon')).toBeFalsy();

    expect(toggleFavorite).toBeCalledTimes(1);
    expect(navigate).toBeCalledTimes(0);
  });
});

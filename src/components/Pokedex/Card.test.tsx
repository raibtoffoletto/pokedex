import { toggleFavorite } from '@mocks/FavoritesContext';
import { navigate } from '@mocks/ReactRouterDom';
import { pokemonList } from '@mocks/entities';
import { act, render, screen, userEvent } from '@tests';
import { describe, expect, it } from 'vitest';
import Card from './Card';

describe('pokemon card component', () => {
  beforeEach(() => {
    navigate.mockReset();
  });

  function setUp(id = 0) {
    const pokemon = pokemonList?.[id];

    if (!pokemon) {
      throw new Error('Pokemon not in mock list');
    }

    const utils = render(<Card id={pokemon.id} name={pokemon.name} />);

    return {
      pokemon,
      ...utils,
    };
  }

  for (const pokemonIndex in pokemonList) {
    it(`should render name and id (${pokemonList[pokemonIndex].name})`, () => {
      const { pokemon } = setUp(Number(pokemonIndex));

      expect(screen.getByText(pokemon.name)).toBeInTheDocument();
      expect(screen.getByText(`#0000${pokemon.id}`)).toBeInTheDocument();
    });
  }

  it('should navigate to pokemon page on card click', async () => {
    const { pokemon } = setUp();

    await act(
      async () => await userEvent.click(screen.getByLabelText(pokemon.name))
    );

    expect(navigate).toBeCalledTimes(1);
    expect(toggleFavorite).toBeCalledTimes(0);
  });

  it('should toggle favorite status for pokemon', async () => {
    const { rerender, pokemon } = setUp();

    expect(screen.queryByTestId('FavoriteBorderIcon')).toBeTruthy();
    expect(screen.queryByTestId('FavoriteIcon')).toBeFalsy();

    await act(
      async () =>
        await userEvent.click(screen.getByLabelText(/^toggle favorite.*/i))
    );

    rerender(<Card id={pokemon.id} name={pokemon.name} />);

    expect(screen.queryByTestId('FavoriteIcon')).toBeTruthy();
    expect(screen.queryByTestId('FavoriteBorderIcon')).toBeFalsy();

    expect(toggleFavorite).toBeCalledTimes(1);
    expect(navigate).toBeCalledTimes(0);
  });
});

import { LOCAL_STORAGE_KEYS } from '@constants';
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IFavoritesContext {
  favorites: IPokemon[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (pokemon: IPokemon) => void;
}

const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  isFavorite: () => false,
  toggleFavorite: () => undefined,
});

export function useFavorites() {
  return useContext(FavoritesContext);
}

/**
 * Load/Save favorite pokemons from/to window localStorage.
 */
function FavoritesProvider({ children }: IParent) {
  const [favorites, setFavorites] = useState<IPokemon[]>(
    JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITES) || '[]'
    )
  );

  const isFavorite = useCallback(
    (id: number) => favorites.findIndex((x) => x.id === id) >= 0,
    [favorites]
  );

  const toggleFavorite = useCallback((pokemon: IPokemon) => {
    setFavorites((_favorites) => {
      const index = _favorites.findIndex((x) => x.id === pokemon.id);

      if (index >= 0) {
        return _favorites.filter((x) => x.id !== pokemon.id);
      }

      const newFavorites = _favorites.slice().concat([pokemon]);
      newFavorites.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base',
        })
      );

      return newFavorites;
    });
  }, []);

  useEffect(() => {
    const _favorites = JSON.stringify(favorites);

    if (
      _favorites !== window.localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITES)
    ) {
      window.localStorage.setItem(LOCAL_STORAGE_KEYS.FAVORITES, _favorites);
    }
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const ProvideFavorites = memo(FavoritesProvider);

export default FavoritesContext;

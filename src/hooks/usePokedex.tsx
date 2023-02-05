import { POKEMON_PAGE_SIZE, POKE_API_PREFIX } from '@constants';
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';

interface IPokedexContext {
  pokemons: PokemonCard[];
  isReady: boolean;
  isLastPage: boolean;
  loadNextPage: () => Promise<void>;
}

interface PageState {
  page: number;
  totalRecords: number;
}

interface PageAction {
  type: keyof PageState;
  value: number;
}

const PokedexContext = createContext<IPokedexContext>({
  pokemons: [],
  isReady: false,
  isLastPage: false,
  loadNextPage: async () => undefined,
});

export function usePokedex() {
  return useContext(PokedexContext);
}

const pageReducer = (state: PageState, action: PageAction) => {
  const { type, value } = action;

  if (!!type) {
    return { ...state, [type]: value };
  }

  return state;
};

const initialPageState = {
  page: 0,
  totalRecords: 0,
};

/**
 * TODO: Implement local cache to improve performance
 */
async function getPage(
  page: number,
  signal?: AbortSignal
): Promise<Repository<PokemonCard>> {
  const limit = POKEMON_PAGE_SIZE;
  const offset = POKEMON_PAGE_SIZE * page;

  const req = await fetch(
    `${POKE_API_PREFIX}/pokemon?offset=${offset}&limit=${limit}`,
    { signal }
  );

  if (req.status >= 400) {
    throw new Error(req.statusText);
  }

  const res: Repository<PokemonRepository> = await req.json();

  return {
    ...res,
    results: res.results.map((p) => {
      const id = Number(
        p.url.replace(`${POKE_API_PREFIX}/pokemon`, '').replaceAll('/', '')
      );

      return { id, name: p.name };
    }),
  };
}

export function PokedexProvider({ children }: IChildren) {
  const fetching = useRef(false);
  const [isReady, setReady] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [{ page, totalRecords }, pageDispatcher] = useReducer(
    pageReducer,
    initialPageState
  );

  const isLastPage = useMemo(
    () => page === Math.ceil(totalRecords / POKEMON_PAGE_SIZE),
    [page, totalRecords]
  );

  const loadNextPage = useCallback(async () => {
    if (!!fetching.current) {
      return;
    }

    try {
      const next = page + 1;
      fetching.current = true;

      const { results } = await getPage(next);

      pageDispatcher({ type: 'page', value: next });
      setPokemons((records) => records.concat(results));
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    } finally {
      fetching.current = false;
    }
  }, [page]);

  useEffect(() => {
    const controller = new AbortController();

    async function initialLoad() {
      try {
        if (!!fetching.current) {
          return;
        }

        fetching.current = true;

        const { count, results } = await getPage(0);

        fetching.current = false;

        pageDispatcher({ type: 'totalRecords', value: count });
        setPokemons(results);
        setReady(true);
      } catch (error) {
        /**
         * TODO: implement error logger
         */

        // eslint-disable-next-line
        console.error(error);
      }
    }

    initialLoad();

    return () => {
      if (!!fetching.current) {
        controller.abort();
      }
    };
  }, []);

  return (
    <PokedexContext.Provider
      value={{ pokemons, isReady, isLastPage, loadNextPage }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export const ProvidePokedex = memo(PokedexProvider);

export default PokedexContext;

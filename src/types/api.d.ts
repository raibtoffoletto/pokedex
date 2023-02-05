interface Repository<T = void> {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: T[];
}

interface PokemonRepository {
  name: string;
  url: string;
}

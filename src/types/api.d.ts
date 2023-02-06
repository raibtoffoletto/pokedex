interface Repository<T = void> {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: T[];
}

interface APIEntity {
  name: string;
  url: string;
}

interface Pokemon {
  id: number;
  height: number;
  weight: number;
  base_experience: number;
  abilities: {
    ability: APIEntity;
  }[];
  types: {
    type: APIEntity;
  }[];
  stats: {
    base_stat: number;
    stat: APIEntity;
  }[];
}

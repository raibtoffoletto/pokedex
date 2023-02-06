interface IParent {
  children: React.ReactNode;
}

interface IPokemon {
  id: number;
  name: string;
}

interface PokemonStat {
  stat: string;
  value: number;
}

interface PokemonPage
  extends Pick<Pokemon, 'id' | 'height' | 'weight' | 'base_experience'> {
  name: string;
  abilities: string[];
  types: string[];
  stats: PokemonStat[];
}

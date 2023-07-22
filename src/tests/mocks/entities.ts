import { faker } from '@faker-js/faker';

export function createPokemon(id: number): Pokemon {
  const url = '';

  return {
    id,
    name: `poke0${id}`,
    height: 6,
    base_experience: 62,
    weight: 85,

    abilities: new Array(2).fill(null).map(() => ({
      ability: {
        url,
        name: faker.word.noun(),
      },
    })),

    stats: new Array(4).fill(null).map(() => ({
      base_stat: faker.number.int(),
      stat: { url, name: faker.word.adjective() },
    })),

    types: [
      {
        type: { url, name: faker.word.noun() },
      },
    ],
  };
}

export const pokemonList = new Array(4)
  .fill(null)
  .map((_, i) => createPokemon(i + 1));

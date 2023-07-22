import { POKE_API_PREFIX } from '@constants';

export const page01 = Object.freeze({
  count: 4,
  next: `${POKE_API_PREFIX}/pokemon?offset=20&limit=20`,
  previous: null,
  results: [
    { name: 'poke01', url: `${POKE_API_PREFIX}/pokemon/1/` },
    { name: 'poke02', url: `${POKE_API_PREFIX}/pokemon/2/` },
  ],
});

export const page02 = Object.freeze({
  count: 4,
  next: null,
  previous: `${POKE_API_PREFIX}/pokemon?offset=0&limit=20`,
  results: [
    { name: 'poke03', url: `${POKE_API_PREFIX}/pokemon/3/` },
    { name: 'poke04', url: `${POKE_API_PREFIX}/pokemon/4/` },
  ],
});

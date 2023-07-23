import { POKE_API_PREFIX } from '@constants';
import { pokemonList } from '@mocks/entities';
import { page01, page02 } from '@mocks/repository';
import { rest } from 'msw';

export const handlers = [
  rest.get(`${POKE_API_PREFIX}/pokemon`, (req, res, ctx) => {
    const offset = Number(req.url.searchParams.get('offset') || 0);

    return res(ctx.status(200), ctx.json(!!offset ? page02 : page01));
  }),

  rest.get(`${POKE_API_PREFIX}/pokemon/:name`, (req, res, ctx) => {
    const { name } = req.params;

    const pokemon = pokemonList.find((p) => p.name === name);

    if (!pokemon) {
      return res(ctx.status(404));
    }

    return res(ctx.status(200), ctx.json(pokemon));
  }),
];

import { APP_ROUTES, POKE_API_PREFIX } from '@constants';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function usePokemon(pokemonName = '') {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonPage | undefined>(undefined);

  useEffect(() => {
    let fetching = false;
    const controller = new AbortController();

    async function findPokemon() {
      try {
        if (!!fetching || !pokemonName) {
          return;
        }

        fetching = true;

        const req = await fetch(`${POKE_API_PREFIX}/pokemon/${pokemonName}`, {
          signal: controller.signal,
        });

        fetching = false;

        if (req.status >= 400) {
          throw new Error(req.statusText);
        }

        const res: Pokemon = await req.json();

        setPokemon({
          id: res.id,
          name: pokemonName,
          height: res.height,
          weight: res.weight,
          base_experience: res.base_experience,
          abilities: res.abilities.map((a) => a.ability.name),
          types: res.types.map((t) => t.type.name),
          stats: res.stats.map((s) => ({
            stat: s.stat.name,
            value: s.base_stat,
          })),
        });
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);

        navigate(APP_ROUTES[404]);
      }
    }

    findPokemon();

    return () => {
      if (!!fetching) {
        controller.abort();
      }
    };
  }, [navigate, pokemonName]);

  return pokemon;
}

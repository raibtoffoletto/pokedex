import Fallback from '@components/Fallback';
import PageTitle from '@components/PageTitle';
import PokemonPage from '@components/Pokemon/Page';
import usePokemon from '@hooks/usePokemon';

import { useParams } from 'react-router-dom';

export default function Pokemon() {
  const { pokemon: pokemonName } = useParams();
  const pokemon = usePokemon(pokemonName);

  return (
    <>
      <PageTitle withReturn title={`${pokemonName}`} />

      {!pokemon ? <Fallback /> : <PokemonPage {...pokemon} />}
    </>
  );
}

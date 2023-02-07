import Card from '@components/Pokedex/Card';
import Grid from '@components/Pokedex/Grid';
import Loader from '@components/Pokedex/Loader';
import { usePokedex } from '@hooks/usePokedex';

export default function List() {
  const { pokemons, isLastPage } = usePokedex();

  return (
    <>
      <Grid disableMargin={!isLastPage}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </Grid>

      {!isLastPage && <Loader />}
    </>
  );
}

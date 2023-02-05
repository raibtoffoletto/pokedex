import Fallback from '@components/Fallback';
import PageTitle from '@components/PageTitle';
import Card from '@components/Pokemon/Card';
import Grid from '@components/Pokemon/Grid';
import Loader from '@components/Pokemon/Loader';
import { usePokedex } from '@hooks/usePokedex';

export default function Pokedex() {
  const { isReady, pokemons, isLastPage } = usePokedex();

  return (
    <>
      <PageTitle title="All Pokemons" />

      {isReady ? (
        <>
          <Grid>
            {pokemons.map((pokemon) => (
              <Card key={pokemon.id} {...pokemon} />
            ))}
          </Grid>

          {!isLastPage && <Loader />}
        </>
      ) : (
        <Fallback />
      )}
    </>
  );
}

import Fallback from '@components/Fallback';
import PageTitle from '@components/PageTitle';
import Card from '@components/Pokedex/Card';
import Grid from '@components/Pokedex/Grid';
import Loader from '@components/Pokedex/Loader';
import { usePokedex } from '@hooks/usePokedex';

/**
 * TODO: extract pokemon list to own component
 * for implementation of tests.
 */
export default function Pokedex() {
  const { isReady, pokemons, isLastPage } = usePokedex();

  return (
    <>
      <PageTitle title="Pokemon List" />

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

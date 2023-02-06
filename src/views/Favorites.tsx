import PageTitle from '@components/PageTitle';
import Card from '@components/Pokedex/Card';
import Grid from '@components/Pokedex/Grid';
import { useFavorites } from '@hooks/useFavorites';

/**
 * TODO: Implement react-transition-group to easy up
 * the removal of favorits
 */
export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <>
      <PageTitle withReturn returnHome title="My Selection" />

      <Grid>
        {favorites.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </Grid>
    </>
  );
}

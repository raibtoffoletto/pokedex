import PageTitle from '@components/PageTitle';
import Card from '@components/Pokedex/Card';
import Grid from '@components/Pokedex/Grid';
import { useFavorites } from '@hooks/useFavorites';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <>
      <PageTitle withReturn title="My Selection" />

      <Grid>
        {favorites.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </Grid>
    </>
  );
}

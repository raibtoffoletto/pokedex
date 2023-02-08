import { useFavorites } from '@hooks/useFavorites';
import {
  Favorite as FavedIcon,
  FavoriteBorder as UnFavedIcon,
} from '@mui/icons-material';
import { Fab, Typography } from '@mui/material';

export default function Favorite({ name, id }: IPokemon) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const faved = isFavorite(id);

  return (
    <Fab
      color="error"
      aria-label={`toggle favorite ${name}`}
      variant="extended"
      sx={{
        right: { xs: 'unset', sm: 32, md: 64, lg: 128, xl: 256 },
        bottom: { xs: 16, sm: 32 },
        position: { xs: 'sticky', sm: 'fixed' },

        '& svg': {
          width: { xs: 24, sm: 32 },
          height: { xs: 24, sm: 32 },
        },
      }}
      onClick={() => {
        toggleFavorite({ name, id });
      }}
    >
      <Typography
        sx={{
          mr: 1,
          fontWeight: 500,
          fontSize: { xs: '1rem', sm: '1.2rem' },
        }}
      >
        {faved ? 'saved' : 'add'}
      </Typography>

      {faved ? <FavedIcon /> : <UnFavedIcon />}
    </Fab>
  );
}

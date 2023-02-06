import { useFavorites } from '@hooks/useFavorites';
import {
  Favorite as FavedIcon,
  FavoriteBorder as UnFavedIcon,
} from '@mui/icons-material';
import { Fab, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Favorite({ name, id }: IPokemon) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [container] = useState(document.createElement('div'));

  const faved = isFavorite(id);

  useEffect(() => {
    if (!document.body.contains(container)) {
      document.body.appendChild(container);
    }

    return () => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, [container]);

  return createPortal(
    <Fab
      color="error"
      aria-label={`toggle favorite ${name}`}
      variant="extended"
      sx={{
        right: 16,
        bottom: 16,
        position: 'fixed',

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
    </Fab>,
    container
  );
}

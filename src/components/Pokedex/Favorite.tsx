import { useFavorites } from '@hooks/useFavorites';
import {
  Favorite as FavedIcon,
  FavoriteBorder as UnFavedIcon,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function Favorite({ name, id }: IPokemon) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <IconButton
      color="error"
      aria-label={`toggle favorite for ${name}`}
      sx={{
        top: 0,
        right: 0,
        zIndex: 100,
        position: 'absolute',
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        toggleFavorite({ name, id });
      }}
    >
      {`${isFavorite(id)}`}
      {isFavorite(id) ? <FavedIcon /> : <UnFavedIcon />}
    </IconButton>
  );
}

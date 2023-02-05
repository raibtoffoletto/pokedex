import { APP_ROUTES } from '@constants';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/**
 * Navigation buttom should be an anchor elemente
 * for accessibility, however, we override the onClick
 * event in order to use the router's navigation hook.
 */
export default function Favorites() {
  const navigate = useNavigate();

  return (
    <Button
      component="a"
      href={APP_ROUTES.FAVORITES}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        navigate(APP_ROUTES.FAVORITES);
      }}
      startIcon={<FavoriteIcon sx={{ display: { xs: 'none', sm: 'flex' } }} />}
      endIcon={<FavoriteIcon sx={{ display: { xs: 'flex', sm: 'none' } }} />}
    >
      Favorites
    </Button>
  );
}

import { APP_ROUTES } from '@constants';
import { Avatar, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

/**
 * Let logo image be responsive according to
 * the screen size.
 *
 * Navigation buttom should be an anchor elemente
 * for accessibility, however, we override the onClick
 * event in order to use the router's navigation hook.
 */
export default function Logo() {
  const navigate = useNavigate();

  return (
    <Button
      component="a"
      href={APP_ROUTES.BASE}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        navigate(APP_ROUTES.BASE);
      }}
      sx={{
        padding: 0,
        minWidth: 0,
      }}
    >
      <Box display={{ xs: 'none', sm: 'flex' }}>
        <img src="/logo.png" height={48} alt="Pokedex Logo" loading="lazy" />
      </Box>

      <Avatar
        src="/logo48.png"
        alt="Pokedex Logo"
        sx={{
          display: { xs: 'flex', sm: 'none' },
        }}
      />
    </Button>
  );
}

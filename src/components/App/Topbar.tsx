import { Box, Toolbar } from '@mui/material';
import Favorites from './Favorites';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';

export default function Topbar() {
  return (
    <Toolbar disableGutters sx={{ gap: 1 }} component="header">
      <Logo />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-end' },
        }}
      >
        <Favorites />

        <ThemeSwitch />
      </Box>
    </Toolbar>
  );
}

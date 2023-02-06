import { Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Typography
      component="h1"
      sx={{
        p: 8,
        fontWeight: 500,
        textAlign: 'center',
        fontSize: { xs: '1rem', sm: '2rem', md: '3rem' },
      }}
    >
      404 | Not found
    </Typography>
  );
}

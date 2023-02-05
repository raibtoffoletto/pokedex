import { Box } from '@mui/material';

export default function Pokedex({ children }: IParent) {
  return (
    <Box
      sx={{
        gap: 2,
        display: 'grid',
        width: '100%',
        maxWidth: '100%',
        gridTemplateColumns: `repeat(auto-fill, minmax(144px, 1fr))`,
      }}
    >
      {children}
    </Box>
  );
}

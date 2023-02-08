import { CircularProgress } from '@mui/material';

export default function Fallback() {
  return (
    <CircularProgress
      size="4rem"
      aria-label="loading app"
      sx={{
        position: 'absolute',
        top: 'calc(50% - 2rem)',
        left: 'calc(50% - 2rem)',
      }}
    />
  );
}

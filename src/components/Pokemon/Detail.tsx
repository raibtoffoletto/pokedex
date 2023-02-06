import { Box, Typography } from '@mui/material';

interface DetailProps {
  title: string;
  value: string;
  fullWidth?: boolean;
}

export default function Detail({ title, value, fullWidth }: DetailProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 1, sm: 0 },
        flexBasis: fullWidth ? '100%' : undefined,
        flexDirection: { xs: fullWidth ? 'column' : 'row', sm: 'column' },
      }}
    >
      <Typography
        fontWeight={500}
        textTransform="capitalize"
        sx={{
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >{`${title}: `}</Typography>

      <Typography textTransform="capitalize">{value}</Typography>
    </Box>
  );
}

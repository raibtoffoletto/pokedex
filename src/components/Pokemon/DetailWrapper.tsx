import { Box, BoxProps } from '@mui/material';

export default function DetailWrapper({ ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        gap: { xs: 1, sm: 4 },
        flexWrap: 'wrap',
        p: { xs: 0, sm: 2 },
        flexGrow: { xs: 0, sm: 1 },
        width: { xs: '100%', sm: 'auto' },
        ...props?.sx,
      }}
    />
  );
}

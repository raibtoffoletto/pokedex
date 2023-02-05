import { Typography } from '@mui/material';

export default function PageTitle({ title }: { title: string }) {
  return (
    <Typography variant="h3" component="h1" align="center">
      {title}
    </Typography>
  );
}

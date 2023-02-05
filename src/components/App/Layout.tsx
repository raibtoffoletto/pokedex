import { Container } from '@mui/material';
import Topbar from './Topbar';

export default function Layout({ children }: IChildren) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        px: { xs: 1, sm: 2, md: 4 },
        gap: { xs: 2, sm: 4 },
      }}
    >
      <Topbar />

      <Container
        disableGutters
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 4 },
        }}
      >
        {children}
      </Container>
    </Container>
  );
}

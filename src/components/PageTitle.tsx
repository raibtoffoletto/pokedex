import { Reply } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PageTitleProps {
  title: string;
  withReturn?: boolean;
}

function ReturnButton() {
  const navigate = useNavigate();

  return (
    <IconButton
      size="large"
      sx={{
        top: 0,
        left: 0,
        position: 'absolute',
      }}
      onClick={() => {
        navigate(-1);
      }}
    >
      <Reply
        sx={{
          width: {
            xs: 24,
            sm: 36,
            md: 48,
          },
          height: {
            xs: 24,
            sm: 36,
            md: 48,
          },
        }}
      />
    </IconButton>
  );
}

export default function PageTitle({ title, withReturn }: PageTitleProps) {
  return (
    <Typography
      component="h1"
      align="center"
      sx={{
        position: 'relative',
        fontSize: {
          xs: '2rem',
          sm: '3rem',
          md: '4rem',
        },
      }}
    >
      {!!withReturn && <ReturnButton />}

      {title}
    </Typography>
  );
}

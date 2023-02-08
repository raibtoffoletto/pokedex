import { APP_ROUTES } from '@constants';
import { Reply } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ReturnButtonProps {
  returnHome?: boolean;
}

interface PageTitleProps extends ReturnButtonProps {
  title: string;
  withReturn?: boolean;
}

function ReturnButton({ returnHome }: ReturnButtonProps) {
  const navigate = useNavigate();

  return (
    <IconButton
      size="large"
      aria-label={returnHome ? 'return home' : 'return to previous page'}
      sx={{
        top: 0,
        left: 0,
        position: 'absolute',
      }}
      onClick={() => {
        if (returnHome) {
          navigate(APP_ROUTES.BASE);

          return;
        }

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

export default function PageTitle({
  title,
  withReturn,
  returnHome,
}: PageTitleProps) {
  return (
    <Typography
      component="h1"
      align="center"
      sx={{
        position: 'relative',
        textTransform: 'capitalize',
        fontSize: {
          xs: '2rem',
          sm: '3rem',
          md: '4rem',
        },
      }}
    >
      {!!withReturn && <ReturnButton returnHome={returnHome} />}

      {title}
    </Typography>
  );
}

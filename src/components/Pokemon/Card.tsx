import { APP_ROUTES, POKE_AVATAR_PREFIX } from '@constants';
import {
  Avatar,
  Card as MUICard,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Card({ name, id }: PokemonCard) {
  const navigate = useNavigate();

  const target = `${APP_ROUTES.BASE}${id}`;

  return (
    <MUICard>
      <CardActionArea
        component="a"
        href={target}
        aria-label={name}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          navigate(target);
        }}
        sx={{
          px: 2,
          py: 1,
        }}
      >
        <CardContent
          sx={{
            p: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt={name}
            src={`${POKE_AVATAR_PREFIX}/${id}.png`}
            sx={{
              width: 112,
              height: 112,
              fontSize: '3rem',
            }}
          />

          <Typography variant="caption" component="div" sx={{ width: '100%' }}>
            {`#${`${id}`.padStart(5, '0')}`}
          </Typography>

          <Typography
            noWrap
            variant="h6"
            component="div"
            sx={{
              width: '100%',
              textTransform: 'capitalize',
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
}

import { getIdLabel } from '@components/Pokedex/Card';
import { POKE_AVATAR_PREFIX } from '@constants';
import { Avatar, Box, Container, Typography } from '@mui/material';
import Detail from './Detail';
import DetailWrapper from './DetailWrapper';
import Favorite from './Favorite';

const FLEX_SX = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: { xs: 'center', sm: 'flex-start' },
};

/**
 * TODO: Refactor page to get better info layout
 * and improve component composition.
 */
export default function Page({
  id,
  name,
  height,
  weight,
  base_experience,
  abilities,
  types,
  stats,
}: PokemonPage) {
  return (
    <Container maxWidth="sm" disableGutters sx={{ ...FLEX_SX, mb: 12 }}>
      <Box
        sx={{
          ...FLEX_SX,
          width: { xs: '100%', sm: 'auto' },
        }}
      >
        <Avatar
          alt={name}
          src={`${POKE_AVATAR_PREFIX}/${id}.png`}
          sx={{
            width: 256,
            height: 256,
            fontSize: '3rem',
          }}
        />
      </Box>

      <DetailWrapper sx={{ ...FLEX_SX }}>
        <Detail title="Id" value={getIdLabel(id)} />

        <Detail title="Height" value={`${height}`} />

        <Detail title="Weight" value={`${weight}`} />

        <Detail title="Base Experience" value={`${base_experience}`} />

        <Detail title="Types" value={types.join(', ')} />

        <Detail title="Abilities" value={abilities.join(', ')} fullWidth />

        <DetailWrapper sx={{ ...FLEX_SX, width: '100%', p: 0 }}>
          <Typography
            sx={{
              mt: { xs: 3, sm: 0 },
              width: { xs: 'auto', sm: '100%' },
              fontWeight: 500,
              fontSize: '1.1rem',
              borderBottom: '1px solid #333',
            }}
          >
            Stats:
          </Typography>

          {stats.map((s) => (
            <Detail key={s.stat} title={s.stat} value={`${s.value}`} />
          ))}
        </DetailWrapper>
      </DetailWrapper>

      <Favorite name={name} id={id} />
    </Container>
  );
}

import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import type { Episode } from '../../__generated__/graphql';

const DetailedEpisodeCard: FC<{ episode: Episode }> = ({ episode }) => (
  <Box>
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      paddingRight={'1rem'}
    >
      <Stack textAlign={'start'}>
        <Typography
          sx={{
            fontWeight: 700,
            color: '#081F32',
          }}
        >
          {episode.episode}
        </Typography>
        <Typography
          sx={{
            color: '#6E798C',
            fontSize: '0.875rem',
          }}
        >
          {episode.name}
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '0.625rem',
            color: '#8E8E93',
            letterSpacing: 1.5,
          }}
        >
          {episode.air_date}
        </Typography>
      </Stack>

      <Link to={`/episode/${episode.id}`} style={{ alignSelf: 'center' }}>
        <IconButton aria-label="link" size="small">
          <ArrowForwardIosIcon fontSize="inherit" />
        </IconButton>
      </Link>
    </Stack>
    <Divider
      variant="middle"
      sx={{
        mt: 2,
        mb: 1,
        ml: 0,
        width: { xs: '18rem', sm: '20rem', md: '24.625rem' },
        height: '1px',
        color: '#212121',
      }}
    />
  </Box>
);

export default DetailedEpisodeCard;

import { Grid, Paper, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Episode } from '../../__generated__/graphql';

const DemoPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 240,
  height: 128,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  background: 'rgba(250, 250, 250, 1)',
  gap: 5,
}));

const EpisodeCard: FC<{
  episode: Pick<Episode, 'id' | 'name' | 'air_date' | 'episode'>;
}> = ({ episode }) => (
  <Grid item border={'1px solid rgba(0, 0, 0, 0.14)'} lg={2.5}>
    <Link
      to={`/episode/${episode.id}`}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <DemoPaper>
        <Typography fontWeight={500} fontSize={'1.25rem'}>
          {episode.name}
        </Typography>
        <Typography fontSize={'0.875rem'} color={'rgba(0, 0, 0, 0.6)'}>
          {episode.air_date}
        </Typography>
        <Typography
          color={'rgba(0, 0, 0, 0.6)'}
          fontWeight={700}
          fontSize={'0.875rem'}
        >
          {episode.episode}
        </Typography>
      </DemoPaper>
    </Link>
  </Grid>
);

export default EpisodeCard;

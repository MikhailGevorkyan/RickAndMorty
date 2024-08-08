import { Grid, Paper, styled, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Location } from '../../__generated__/graphql';

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

const LocationCard: FC<{
  location: Pick<Location, 'id' | 'type' | 'name'>;
}> = ({ location }) => (
  <Grid item border={'1px solid rgba(0, 0, 0, 0.14)'} lg={2.5}>
    <Link
      to={`/location/${location.id}`}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <DemoPaper>
        <Typography fontWeight={500} fontSize={'1.25rem'}>
          {location.name}
        </Typography>
        <Typography fontSize={'0.875rem'} color={'rgba(0, 0, 0, 0.6)'}>
          {location.type}
        </Typography>
      </DemoPaper>
    </Link>
  </Grid>
);

export default LocationCard;

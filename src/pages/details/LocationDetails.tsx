import { useParams } from 'react-router-dom';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import GoBackButton from '../../components/buttons/GoBackButton';
import CharacterCard from '../../components/cards/CharacterCard';
import { FC } from 'react';
import LoadingIcon from '../../components/logos/LoadingIcon';
import { useQuery } from '@apollo/client';
import { GET_LOCATION_BY_ID } from '../../service/graphql/queries';

const LocationDetails: FC = () => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_LOCATION_BY_ID, {
    variables: { trackID: params.id! },
  });

  if (loading) return <LoadingIcon />;
  if (error)
    return (
      <Typography variant="h6" color="error">
        Error fetching location details.
      </Typography>
    );
  if (!data || !data.location)
    return <Typography variant="h6">Location not found.</Typography>;

  const { location } = data;

  return (
    <Container sx={{ mb: '7rem' }}>
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '5%', md: '20%' },
          top: { xs: '8%', md: '10%' },
        }}
      >
        <GoBackButton name="locations" />
      </Box>

      <Stack
        sx={{
          flexDirection: { sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          mt: '3rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '2.25rem',
            fontWeight: 400,
            m: '1rem auto',
          }}
        >
          {location.name}
        </Typography>
      </Stack>

      <Stack
        sx={{
          mt: '2rem',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: 'start',
          gap: { xs: '3rem', md: '10rem' },
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            Type
          </Typography>
          <Typography
            sx={{ fontWeight: 400, color: '#6E798C', fontSize: '0.875rem' }}
          >
            {location.type}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            Dimension
          </Typography>
          <Typography
            sx={{ fontWeight: 400, color: '#6E798C', fontSize: '0.875rem' }}
          >
            {location.dimension}
          </Typography>
        </Stack>
      </Stack>

      <Typography
        variant="h6"
        sx={{
          color: 'rgba(142, 142, 147, 1)',
          fontWeight: 500,
          fontSize: '1.25rem',
          mt: '2rem',
          ml: '4.5rem',
          textAlign: 'start',
        }}
      >
        Residents
      </Typography>

      <Grid container gap={2} mt={2} justifyContent={'center'}>
        {Array.isArray(location.residents) && location.residents.length > 0 ? (
          location.residents.map(
            (resident) =>
              resident && (
                <CharacterCard key={resident.id} character={resident} />
              ),
          )
        ) : (
          <Typography variant="h4" fontWeight={400}>
            No residents in this location.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default LocationDetails;

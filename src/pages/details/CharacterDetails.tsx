import {
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useQuery } from '@apollo/client';
import GoBackButton from '../../components/buttons/GoBackButton';
import DetailedEpisodeCard from '../../components/cards/DetailedEpisodeCard';
import LoadingIcon from '../../components/logos/LoadingIcon';
import { Episode } from '../../__generated__/graphql';
import { GET_CHARACTER_BY_ID } from '../../service/graphql/queries';

const CharacterDetails: FC = () => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { trackID: params.id! },
  });

  if (loading) return <LoadingIcon />;
  if (error) return <h1>Error...</h1>;
  if (!data || !data.character) return <h1>Empty character...</h1>;

  const { character } = data;

  const characterInfo = [
    { id: 1, label: 'Gender', value: character.gender },
    { id: 2, label: 'Status', value: character.status },
    { id: 3, label: 'Species', value: character.species },
    { id: 4, label: 'Origin', value: character.origin.name },
    { id: 5, label: 'Type', value: character.type || 'Unknown' },
  ];

  return (
    <Container sx={{ mb: '7rem' }}>
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '5%', md: '20%' },
          top: { xs: '8%', md: '10%' },
        }}
      >
        <GoBackButton name="characters" />
      </Box>
      <Stack
        sx={{
          flexDirection: { md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          mt: '2rem',
        }}
      >
        <Stack alignItems={'center'}>
          <Avatar
            alt={`${character.name} Avatar`}
            src={character.image}
            draggable="false"
            sx={{
              width: { xs: 148, md: 350 },
              height: { xs: 148, md: 350 },
              mt: 3,
              border: '6px solid #e9eff0',
            }}
          />
          <Typography
            variant="h1"
            fontSize={{ xs: '2rem', md: '3rem' }}
            mt={2}
            fontWeight={400}
          >
            {character.name}
          </Typography>
        </Stack>
      </Stack>

      <Stack
        mt={'3rem'}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={'center'}
      >
        <Stack mb="3rem">
          <Typography
            sx={{
              color: '#8E8E93',
              fontSize: '1.25rem',
              fontWeight: 500,
              mb: '1rem',
              textAlign: { xs: 'start', sm: 'inherit' },
            }}
          >
            Informations
          </Typography>

          {characterInfo.map(({ id, label, value }) => (
            <Box key={id}>
              <Stack
                sx={{
                  textAlign: 'start',
                  ml: { xs: 2, md: 30 },
                }}
              >
                <Typography
                  sx={{
                    color: '#081F32',
                    fontWeight: 700,
                  }}
                >
                  {label}
                </Typography>
                <Typography
                  sx={{
                    color: '#6E798C',
                    fontWeight: 400,
                    fontSize: '0.825rem',
                  }}
                >
                  {value}
                </Typography>
              </Stack>
              <Divider
                variant="middle"
                sx={{
                  mt: 1,
                  mb: 1,
                  ml: { xs: 3, md: 30 },
                  width: { xs: '18rem', sm: '20rem', md: '24.625rem' },
                  height: '1px',
                }}
              />
            </Box>
          ))}

          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            paddingRight={'1rem'}
          >
            <Stack
              sx={{
                textAlign: 'start',
                ml: { xs: 2, md: 30 },
              }}
            >
              <Typography
                sx={{
                  color: '#081F32',
                  fontWeight: 700,
                }}
              >
                Location
              </Typography>
              <Typography
                sx={{
                  color: '#6E798C',
                  fontWeight: 400,
                  fontSize: '0.825rem',
                }}
              >
                {character.location.name}
              </Typography>
            </Stack>
            <Link
              to={`/location/${character.location.id}`}
              style={{ alignSelf: 'center' }}
            >
              <IconButton aria-label="link" size="small">
                <ArrowForwardIosIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              mt: 1,
              mb: 1,
              ml: { xs: 2, md: 30 },
              width: { xs: '18rem', sm: '20rem', md: '24.625rem' },
              height: '1px',
            }}
          />
        </Stack>
        <Stack
          sx={{
            ml: { md: '5.5rem' },
          }}
        >
          <Typography
            variant="h6"
            color={'#8E8E93'}
            fontSize={'1.25rem'}
            fontWeight={500}
            textAlign={'start'}
            mb={'1rem'}
          >
            Episodes
          </Typography>
          <Stack
            sx={{
              textAlign: 'start',
              gap: 0.3,
              ml: { xs: 2 },
            }}
          >
            {character.episode.map(
              (episode: Episode) =>
                episode && (
                  <DetailedEpisodeCard key={episode.id} episode={episode} />
                ),
            )}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CharacterDetails;

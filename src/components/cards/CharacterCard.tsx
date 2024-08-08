import { CardMedia, Grid, Typography } from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Character } from '../../__generated__/graphql';

const CharacterCard: FC<{
  character: Pick<Character, 'id' | 'name' | 'species' | 'image'>;
}> = ({ character }) => {
  const { id, name, species, image } = character;

  return (
    <Grid
      item
      border={'1px solid rgba(0, 0, 0, 0.14)'}
      lg={2.5}
      sx={{
        borderRadius: 2,
        width: { xs: '19.5rem', sm: '15rem' },
      }}
    >
      <Link
        to={`/character/${id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        {image && (
          <CardMedia
            component={'img'}
            src={image}
            draggable="false"
            sx={{
              height: 180,
            }}
          />
        )}
        <Typography
          variant="h6"
          fontSize={'1.25rem'}
          fontWeight={500}
          textAlign={'left'}
          marginLeft={2}
        >
          {name}
        </Typography>
        <Typography
          paragraph
          fontSize={'0.875rem'}
          color={'rgba(0, 0, 0, 0.6)'}
          textAlign={'left'}
          marginLeft={2}
        >
          {species}
        </Typography>
      </Link>
    </Grid>
  );
};

export default CharacterCard;

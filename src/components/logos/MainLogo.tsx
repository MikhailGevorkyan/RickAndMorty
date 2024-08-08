import { CardMedia } from '@mui/material';

const MainLogo = () => (
  <CardMedia
    component={'img'}
    src={'/images/main_logo.png'}
    sx={{
      width: { xs: '19.5rem', md: '31.25rem' },
      margin: '2.3rem auto 0',
    }}
  />
);

export default MainLogo;

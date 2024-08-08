import { Stack, CardMedia, AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuDrawer from './MenuDrawer';

const Header: React.FC = () => {
  return (
    <Box component={'header'}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: { xs: 'space-between', md: 'space-around' },
            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 8px',
            backgroundColor: 'white',
          }}
        >
          <Link to={'/'}>
            <CardMedia
              component={'img'}
              image="/images/logo_black.png"
              sx={{ height: 40, width: 40 }}
            />
          </Link>

          <Box
            sx={{
              display: { sm: 'block', xs: 'none' },
            }}
          >
            <Stack spacing={1} direction="row" justifyContent="center" gap={2}>
              <Link
                to={'/'}
                style={{
                  color: 'black',
                  fontFamily: 'Karla',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                }}
              >
                Characters
              </Link>
              <Link
                to={'/locations'}
                style={{
                  color: 'black',
                  fontFamily: 'Karla',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                }}
              >
                Locations
              </Link>
              <Link
                to={'/episodes'}
                style={{
                  color: 'black',
                  fontFamily: 'Karla',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  textDecoration: 'none',
                }}
              >
                Episodes
              </Link>
            </Stack>
          </Box>
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <MenuDrawer />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

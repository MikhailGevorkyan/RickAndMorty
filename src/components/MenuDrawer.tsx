import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useState } from 'react';

type Anchor = 'top';

const MenuDrawer = () => {
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="characters" disablePadding>
          <ListItemButton component={Link} to={'/'}>
            <ListItemText
              primary="Characters"
              style={{
                color: 'black',
                fontFamily: 'Karla',
                fontWeight: 700,
                fontSize: '1.125rem',
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem key="locations" disablePadding>
          <ListItemButton component={Link} to={'/locations'}>
            <ListItemText
              primary="Locations"
              style={{
                color: 'black',
                fontFamily: 'Karla',
                fontWeight: 700,
                fontSize: '1.125rem',
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem key="episodes" disablePadding>
          <ListItemButton component={Link} to={'/episodes'}>
            <ListItemText
              primary="Episodes"
              sx={{
                color: 'black',
                fontFamily: 'Karla',
                fontWeight: 700,
                fontSize: '1.125rem',
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('top', true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        sx={{ height: '100vh' }}
      >
        {list('top')}
      </Drawer>
    </div>
  );
};

export default MenuDrawer;

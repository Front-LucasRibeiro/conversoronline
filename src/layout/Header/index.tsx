import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { WrapMenu } from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Conversores', path: '/conversores' },
    { text: 'Calculadoras', path: '/calculadoras' },
    { text: 'Sobre', path: '/sobre' }
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to='/'>
            <Typography variant="h6" color='#fff'>
              Conversor Online
            </Typography>
          </Link>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <WrapMenu
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <li>
                <Link to={item.path}>
                  <ListItemText primary={item.text} />
                </Link>
              </li>
            ))}
          </List>
        </WrapMenu>
      </Drawer>
    </>
  );
}
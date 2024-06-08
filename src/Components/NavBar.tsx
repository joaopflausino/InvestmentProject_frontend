import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider, ListItemButton, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const StyledDrawer = {
  width: drawerWidth,
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#000',  // Set drawer background to black
    color: '#fff',            // Set text color to white
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

const StyledListItemButton = {
  '&:hover': {
    backgroundColor: '#FFC600',
    color: '#000000',
    textDecoration: 'none',
    '& .MuiListItemIcon-root': {
      color: '#000000',
    },
  },
  '&.Mui-selected': {
    backgroundColor: '#FFC600',
    color: '#000000',
    '& .MuiListItemIcon-root': {
      color: '#000000',
    },
  },
};

const Navbar: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, link: '/home' },
          { text: 'News', icon: <NewspaperIcon />, link: '/news' },
          { text: 'User Investments', icon: <AccountBalanceWalletIcon />, link: '/addinvestments' },
          { text: 'Investments', icon: <AccountBalanceWalletIcon />, link: '/investments' },
          { text: 'Simulate', icon: <CalculateIcon />, link: '/simulate' },
        ].map((item) => (
          <ListItemButton sx={StyledListItemButton} key={item.text} component={Link} to={item.link}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#fff' }}/>
      <List>
        {[
          { text: 'Account', icon: <AccountCircleIcon />, link: '/account' },
          { text: 'Logout', icon: <LogoutIcon />, link: '/' },
        ].map((item) => (
          <ListItemButton sx={StyledListItemButton} key={item.text} component={Link} to={item.link}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </>
  );

  return (
    <>
      {isSmallScreen ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={StyledDrawer}
          >
            {drawer}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={StyledDrawer}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Navbar;

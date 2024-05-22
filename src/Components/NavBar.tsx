import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar,Divider, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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
}

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
}


const Navbar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={StyledDrawer}
    >
      <Toolbar />
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, link: '/home' },
          { text: 'News', icon: <NewspaperIcon />, link: '/news' },
          { text: 'User Investments', icon: <AccountBalanceWalletIcon />, link: '/addinvestments' },
          { text: 'Investments', icon: <AccountBalanceWalletIcon />, link: '/investments' },
          { text: 'Simulate', icon: <CalculateIcon />, link: '/simulate' },
          
        ].map((item, index) => (
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
        ].map((item, index) => (
            <ListItemButton sx={StyledListItemButton} key={item.text} component={Link} to={item.link}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>


    </Drawer>
  );
};

export default Navbar;

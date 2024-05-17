import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar,Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
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
}));

const MainContent = styled('div')({
  flexGrow: 1,
});

const Navbar: React.FC = () => {
  return (
    <StyledDrawer
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        {[
          { text: 'Home', icon: <HomeIcon />, link: '/home' },
          { text: 'News', icon: <NewspaperIcon />, link: '/news' },
          { text: 'Investments', icon: <AccountBalanceWalletIcon />, link: '/investments' },
          { text: 'Simulate', icon: <CalculateIcon />, link: '/simulate' },
          
        ].map((item, index) => (
            <ListItem button key={item.text} component={Link} to={item.link}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      
      <Divider sx={{ backgroundColor: '#fff' }}/>
      <List>
        {[
            { text: 'Account', icon: <AccountCircleIcon />, link: '/account' },
            { text: 'Logout', icon: <LogoutIcon />, link: '/' },
        ].map((item, index) => (
            <ListItem button key={item.text} component={Link} to={item.link}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>


    </StyledDrawer>
  );
};

export default Navbar;

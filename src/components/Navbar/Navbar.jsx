import React from 'react';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import './Navbar.css';
import { Badge, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Navbar = () => {
  return (
    <Typography className="nav">
      <Typography className="nav-left">
        <img
          src="https://www.assiduusglobal.com/images/assiduus-logo-dark.png"
          width="160"
          height="42"
          className="img-fluid"
          alt="Assiduus"
        />
      </Typography>
      <Typography className="nav-right">
        <input type="text" placeholder="Search ..." className="search-box" />
        <SearchIcon className="search-icon" />
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={1} color="success">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{
              bgcolor: deepPurple[400],
              width: 24,
              height: 24,
              fontSize: '10px',
              marginLeft: '20px',
            }}
            className="avtar"
          >
            AD
          </Avatar>
        </IconButton>
      </Typography>
    </Typography>
  );
};

export default Navbar;

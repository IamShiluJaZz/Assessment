import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog App
        </Typography>
        <Button color="primary" component={Link} to="/">Home</Button>
        <Button color="primary" component={Link} to="/add">Add Blog</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

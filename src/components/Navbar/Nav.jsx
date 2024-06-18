import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Divider, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h6"
            onClick={() => setMenu('shop')}
            component={Link}
            to="/"
            sx={{ textDecoration: 'none', color: 'orange', mr: 2 }}
          >
            Shop
          </Typography>
          {menu === 'shop' && <Divider orientation="vertical" flexItem />}
          <Typography
            variant="h6"
            onClick={() => setMenu('Top10')}
            component={Link}
            to="/Top10"
            sx={{ textDecoration: 'none', color: 'orange', ml: 2 }}
          >
            Men
          </Typography>
          {menu === 'Top10' && <Divider orientation="vertical" flexItem />}
        </div>
        <div>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
          >
            Login
          </Button>
          <IconButton component={Link} to="/cart" color="inherit">
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

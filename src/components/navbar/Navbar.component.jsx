import React, { useState } from 'react';
import { AppBar, Button, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { RiMenu2Line } from 'react-icons/ri';
import Apple from '../../assets/apple.svg';


const pages = [
  {
    id: 1,
    link: "#home",
    menu: "Home",
  },
  {
    id: 2,
    link: "#expertise",
    menu: "Expertise",
  },
  {
    id: 3,
    link: "#project",
    menu: "Projects",
  },
  {
    id: 4,
    link: "#tool",
    menu: "Toolkits",
  },
  {
    id: 5,
    link: "#about",
    menu: "About",
  }]

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{
        backgroundColor: '#fff',
        borderBottom: 1,
        borderColor: '#E0E3E7',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>  
        {/*Desktop Logo Name__________________________________________*/}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: '#B0384D', 
                mr: 6,
                ml: 2, 
                display: { xs: 'none', md: 'flex' },
                fontWeight: 'bold',
                fontSize: 24,
                letterSpacing: 0.75,
                '&:hover':{
                    color: '#F28346',}}}
          >
            SAHARATH
            <img
              src={Apple}
              style={{height: 35, width: 35, paddingLeft: '0.5rem',}}
              alt="svg logo"
              >
            </img>
          </Typography>
          {/* End Logo Name____________________________________*/}

          {/* Menu bar on mobile_______________________________*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <RiMenu2Line color="black" size={20}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },}}>
              {pages.map((page) => (
                <MenuItem href={page.link} component="a" key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{
                      px:4, 
                      '&:hover': {
                        fontWeight: 'bold',
                        color: '#B0384D',}
                  }}>{page.menu}</Typography>
                </MenuItem>
              ))}
            </Menu>
        {/* End Menu bar on mobile__________________*/}


        {/* Logo on Mobile*/}
          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: '#B0384D', fontWeight: 'bold', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              SAHARATH
              <img
                src={Apple}
                style={{height: 30, width: 30, paddingLeft: '0.5rem',}}
                alt="svg logo"
                >
              </img>
            </Typography>
            {/* End logo on Mobile*/}

            {/*Menu Bar on Desktop*/}
            <Box sx={{ flexGrow: 1, mr: 3, display: { xs: 'none', md: 'flex' }, }}>
              {pages.map((page) => (
                <Button
                  component="a"
                  href={page.link}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', px:2,
                  fontWeight: 550,
                  fontSize: 16,
                  fontFamily: 'Helvetica',
                  textTransform: 'Capitalize',}}
                >
                  {page.menu}
                </Button>
              ))}
            </Box>
            {/* End MenuBar on Desktop*/}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
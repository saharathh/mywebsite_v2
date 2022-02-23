import React, { useState } from 'react';
import {AppBar, Button, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { RiMenu2Line } from 'react-icons/ri';
import MaterialUISwitch from '../switch/MuiSwitch.component';

const pages = ["Home", "Expertise", "Projects", "Toolkits", "About"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
        <Toolbar disableGutters>

        
        {/* Mobile Devices*/}
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
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{
                      px:4, 
                      '&:hover': {
                        fontWeight: 'bold',
                        color: '#B0384D',}
                  }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
        {/* End Mobile section*/}


        {/* Desktop Screen*/}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: '#B0384D', fontWeight: 'bold', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            SAHARATH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', px:2,
                color: 'black',
                fontWeight: 550,
                fontSize: 16,
                fontFamily: 'Helvetica',
                textTransform: 'Capitalize',
                '&:hover':{
                    color: '#FFF',
                    borderRadius: '6px',
                    backgroundColor: '#B0384D',
                    opacity: '70%',
                }}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <MaterialUISwitch />
        {/* End Desktop Section*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

// const menus = ["Home", "Expertise", "Projects", "Toolkits"]

// const ResponsiveMenu = () => (
//   <Tabs sx={{px:4, display: {xs: 'none', md: 'flex', lg: 'flex'}}}>
//     {menus.map(menu => (
//       <Tab label={menu} sx={{
//         px:4,
//         fontWeight: 550,
//         fontSize: 16,
//         fontFamily: 'Helvetica',
//         textTransform: 'Capitalize',
//         '&:hover':{
//           color: '#fff',
//           borderRadius: '12px',
//           transform: 'scale(1) perspective(0px)',
//           backgroundColor: '#B0384D',
//           opacity: '70%',
//           }}}>
//         </Tab>
//     ))}
//   </Tabs>
// )

// const Navbar = () => {
//     const [toggleMenu, setToggleMenu] = useState(false);

//     return (
//         <AppBar position="fixed" elevation={0} sx={{
//           backgroundColor: '#fff',
//           borderBottom: 1,
//           borderColor: '#E0E3E7'
//         }}>
//             <Toolbar sx={{
//               justifyContent: 'space-between',
//               alignItems: 'center',
//             }}>
//                 {/* <Tabs sx={{px:4, display: {xs: 'none', md: 'flex', lg: 'flex'}}}>
//                 {menus.map(menu => (
//                   <Tab label={menu} sx={{
//                     px:4,
//                     fontWeight: 550,
//                     fontSize: 16,
//                     fontFamily: 'Helvetica',
//                     textTransform: 'Capitalize',
//                     '&:hover':{
//                       color: '#fff',
//                       borderRadius: '12px',
//                       transform: 'scale(1) perspective(0px)',
//                       backgroundColor: '#B0384D',
//                       opacity: '70%',
//                       }}}>
//                     </Tab>
//                 ))}
//                 </Tabs> */}
//                 <ResponsiveMenu />
//                 <Tabs sx={{m:1, display: {xs: 'flex', md: 'none', lg: 'none'}, alignItems:'center'}}>
//                 {toggleMenu
//                     ? <RiCloseLine color="#000000" size={20} onClick={() => setToggleMenu(false)} />
//                     : <RiMenu2Line color="#000000" size={20} onClick={() => setToggleMenu(true)} />
//                 }
//                     {toggleMenu && (
//                       <ResponsiveMenu />
//                 )}
//                 </Tabs>
//                 <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Navbar;
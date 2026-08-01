import {
  styled,
  Container,
  Box,
  useTheme,
  Typography,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  Drawer,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Header from './vertical/header/Header';
import HorizontalHeader from '../full/horizontal/header/Header';
import Sidebar from './vertical/sidebar/Sidebar';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import Customizer from './shared/customizer/Customizer';
import Navigation from './horizontal/navbar/Navbar';
import {
  IconAddressBook,
  IconBrandShopee,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconHome2,
  IconMenu,
  IconMenu2,
  IconMoodNerd,
  IconSearch,
  IconShoppingBag,
  IconUserCircle,
} from '@tabler/icons';
import TabBar from './vertical/header/TabBar';
import NavListing from './horizontal/navbar/NavListing/NavListing';
import { useState } from 'react';
import { BottomMenu } from './shared/menu/BottomMenu';

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  width: '100%',
  backgroundColor: 'transparent',
}));

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  // {
  //   title: 'Sample Page',
  // },
];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const FullLayout = () => {
  const customizer = useSelector((state) => state.customizer);

  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <MainWrapper
      className={customizer.activeMode === 'dark' ? 'darkbg mainwrapper' : 'mainwrapper'}
    >
      {/* Sidebar */}
      {customizer.isHorizontal ? '' : <Sidebar />}

      {/* Main Content */}
      <PageWrapper
        className="page-wrapper"
        sx={{
          ...(customizer.isCollapse && {
            [theme.breakpoints.up('lg')]: { ml: `${customizer.MiniSidebarWidth}px` },
          }),
        }}
      >
        {/* Header hanya tampil jika bukan mobile */}
        {!isMobile && (customizer.isHorizontal ? <HorizontalHeader /> : <Header />)}

        <Container
          sx={{
            maxWidth: customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
          }}
        >
          <Box sx={{ minHeight: 'calc(100vh - 170px)', mt: 2 }}>
            <Outlet />
          </Box>
          {/* <Typography>endpage</Typography> */}
        </Container>
        {isMobile && (
          <AppBar
            position="fixed"
            color="inherit"
            elevation={10}
            sx={{
              top: 'auto',
              bottom: 0,

              borderTop: '1px solid #ECECEC',

              bgcolor: '#fff',
            }}
          >
            <Toolbar
              sx={{
                display: 'flex',

                justifyContent: 'space-around',

                py: 0.8,
              }}
            >
              <BottomMenu
                title="Produk"
                icon={<IconShoppingBag size={20} />}
                active={pathname.startsWith('/product-page')}
                onClick={() => navigate('/product-page')}
              />

              <BottomMenu
                title="Home"
                icon={<IconHome2 size={20} />}
                active={pathname === '/home-page'}
                onClick={() => navigate('/home-page')}
              />

              <BottomMenu
                title="Tanya Admin"
                icon={<IconBrandWhatsapp size={20} />}
                active={false}
                onClick={() => window.open('https://wa.me/628123456789', '_blank')}
              />
            </Toolbar>
          </AppBar>
        )}
        {/* Sticky Bottom Info */}
        {/* 
         <Typography variant="body2" color="text.secondary">
            {isMobile === customizer.isHorizontal ? 'Mobile Page' : 'Dekstop Page'}
          </Typography>  */}
      </PageWrapper>
      <Drawer anchor="left" open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{
            width: 280,
            p: 2,
          }}
        >
          <NavListing />
        </Box>
      </Drawer>
    </MainWrapper>
  );
};

export default FullLayout;

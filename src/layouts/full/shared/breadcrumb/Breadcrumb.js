import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Breadcrumbs, Link, Skeleton, CardMedia, Avatar, Stack, Fab } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { IconBrandWhatsapp, IconBrandLinkedin } from '@tabler/icons';
import BlankCard from '../../../../components/shared/BlankCard';
import Resume from './Resume';
import profilecover from 'src/assets/images/backgrounds/profilebg.jpg';
import userimg from 'src/assets/images/profile/ronaldy.jpg';
import Welcome from './Welcome';
// import Canvas from './Canvas';

const ProfileImage = styled(Box)(({ theme }) => ({
  borderRadius: '80%',
  width: '160px',
  height: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
}));

const Breadcrumb = ({ subtitle, items, title, children }) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BlankCard>
        {isLoading ? (
          <Skeleton variant="square" animation="wave" width="100%" height={200} />
        ) : (
          // <Canvas />
          <Welcome />
        )}

        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid
            item
            lg={4}
            sm={12}
            md={5}
            xs={12}
            sx={{
              order: {
                xs: '2',
                sm: '2',
                lg: '1',
              },
            }}
          >
            <Stack direction={'row'} gap={2} alignItems="center" justifyContent="center" my={2}>
              <Fab size="large" color="primary" sx={{ backgroundColor: '#1877F2' }}>
                <IconBrandWhatsapp size="16" />
              </Fab>
              <Fab size="large" color="primary" sx={{ backgroundColor: '#1DA1F2' }}>
                <IconBrandLinkedin size="18" />
              </Fab>
            </Stack>
          </Grid>

          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
            sx={{
              order: {
                xs: '1',
                sm: '1',
                lg: '2',
              },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              textAlign="center"
              justifyContent="center"
              sx={{ mt: '-85px' }}
            >
              <Box>
                <ProfileImage>
                  <Avatar
                    src={userimg}
                    alt={userimg}
                    sx={{
                      borderRadius: '50%',
                      width: '140px',
                      height: '140px',
                      border: '4px solid #fff',
                    }}
                  />
                </ProfileImage>
                <Box mt={1} mb={2}>
                  <Typography fontWeight={800} variant="h2">
                    Ronaldy Mardi Perdana
                  </Typography>
                  <Typography color="textSecondary" variant="h4" fontWeight={600}>
                    Web Developer
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            lg={4}
            sm={12}
            xs={12}
            pr={5}
            pl={5}
            mb={2}
            sx={{
              order: {
                xs: '3',
                sm: '3',
                lg: '3',
              },
            }}
          >
            <Box>
              <Resume />
            </Box>
          </Grid>
        </Grid>
      </BlankCard>
    </>
  );
};

export default Breadcrumb;

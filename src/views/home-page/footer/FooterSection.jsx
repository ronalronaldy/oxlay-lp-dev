import React from 'react';
import { Box, Container, Divider, Grid, IconButton, Link, Typography } from '@mui/material';
import {
  IconMapPin,
  IconBrandShopee,
  IconBrandTiktok,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
} from '@tabler/icons';

export default function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: {
          xs: 6,
          md: 8,
        },
        borderTop: '1px solid',
        borderColor: 'divider',
        background: '#fff',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          {/* ADDRESS */}

          <Grid item xs={12} md={5}>
            <Typography variant="h5" fontWeight={700} mb={3} letterSpacing={1}>
              ADDRESS
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
              }}
            >
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: 2,
                  bgcolor: 'primary.light',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconMapPin size={24} color="#d32f2f" />
              </Box>

              <Box>
                <Typography fontWeight={600}>Viniro Official Store</Typography>

                <Typography color="text.secondary">Cakung, Jakarta Timur</Typography>

                <Typography color="text.secondary">DKI Jakarta, Indonesia</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Divider */}

          <Grid
            item
            md="auto"
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              justifyContent: 'center',
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                height: 120,
                borderWidth: 1,
              }}
            />
          </Grid>

          {/* FOLLOW */}

          <Grid item xs={12} md={5}>
            <Typography variant="h5" fontWeight={300} fontStyle="italic" mb={3}>
              Follow us
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <IconButton
                component={Link}
                href="https://shopee.co.id"
                target="_blank"
                sx={{
                  bgcolor: '#f5f5f5',
                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#EE4D2D',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconBrandShopee size={22} />
              </IconButton>

              <IconButton
                component={Link}
                href="https://www.tiktok.com"
                target="_blank"
                sx={{
                  bgcolor: '#f5f5f5',

                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#000',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconBrandTiktok size={22} />
              </IconButton>

              <IconButton
                component={Link}
                href="https://instagram.com"
                target="_blank"
                sx={{
                  bgcolor: '#f5f5f5',

                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#E1306C',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconBrandInstagram size={22} />
              </IconButton>

              <IconButton
                component={Link}
                href="https://wa.me/628123456789"
                target="_blank"
                sx={{
                  bgcolor: '#f5f5f5',

                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#25D366',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconBrandWhatsapp size={22} />
              </IconButton>

              <IconButton
                component={Link}
                href="mailto:admin@viniro.com"
                sx={{
                  bgcolor: '#f5f5f5',

                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#d32f2f',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconMail size={22} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom */}

        <Divider sx={{ my: 5 }} />

        <Typography textAlign="center" color="text.secondary" fontSize={14}>
          © {new Date().getFullYear()} <b>Viniro</b>. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

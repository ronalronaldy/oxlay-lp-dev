import React from 'react';

import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from '@mui/material';

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
          xs: 5,
          md: 8,
        },
        borderTop: '1px solid',
        borderColor: 'divider',
        background: '#fff',
      }}
    >
      <Container maxWidth="lg">

        {/* =========================
            TOP FOOTER
        ========================== */}

        <Grid
          container
          spacing={{
            xs: 2,
            md: 5,
          }}
          alignItems="center"
        >

          {/* =========================
              ADDRESS
          ========================== */}

          <Grid
            item
            xs={6}
            md={5}
          >
            {/* <Typography
              variant="h5"
              fontWeight={700}
              mb={{
                xs: 2,
                md: 3,
              }}
              letterSpacing={1}
              sx={{
                fontSize: {
                  xs: 16,
                  sm: 18,
                  md: 24,
                },
              }}
            >
              ADDRESS
            </Typography> */}

            <Box
              sx={{
                display: 'flex',
                gap: {
                  xs: 1,
                  md: 2,
                },
                alignItems: 'flex-start',
              }}
            >

              {/* Location Icon */}

              <Box
                sx={{
                  width: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },
                  height: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },
                  minWidth: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },
                  borderRadius: 2,
                  bgcolor: 'primary.light',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <IconMapPin
                  size={20}
                  color="#d32f2f"
                />
              </Box>

              {/* Address Text */}

              <Box
                sx={{
                  minWidth: 0,
                }}
              >
                <Typography
                  fontWeight={600}
                  sx={{
                    fontSize: {
                      xs: 12,
                      sm: 14,
                      md: 16,
                    },
                    lineHeight: 1.4,
                  }}
                >
                  Viniro Official Store
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: 11,
                      sm: 13,
                      md: 14,
                    },
                    lineHeight: 1.5,
                    mt: 0.5,
                  }}
                >
                  Cakung, Jakarta Timur
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: {
                      xs: 11,
                      sm: 13,
                      md: 14,
                    },
                    lineHeight: 1.5,
                  }}
                >
                  DKI Jakarta, Indonesia
                </Typography>
              </Box>

            </Box>
          </Grid>


          {/* =========================
              DIVIDER
          ========================== */}

          <Grid
            item
            md="auto"
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              justifyContent: 'center',
              alignItems: 'center',
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


          {/* =========================
              FOLLOW US
          ========================== */}

          <Grid
            item
            xs={6}
            md={5}
          >
            <Typography
              variant="h5"
              mb={{
                xs: 4,
                md: 3,
              }}
            >
              Ikuti kami
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: {
                  xs: 0.5,
                  sm: 1,
                  md: 2,
                },
                flexWrap: 'wrap',
              }}
            >

              {/* Shopee */}

              <IconButton
                component={Link}
                href="https://shopee.co.id"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#f5f5f5',

                  width: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },

                  height: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },

                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#EE4D2D',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconBrandShopee
                  size={20}
                />
              </IconButton>


              {/* TikTok */}

              <IconButton
                component={Link}
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#f5f5f5',

                  width: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },

                  height: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },

                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#000',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconBrandTiktok
                  size={20}
                />
              </IconButton>


              {/* Instagram */}

              <IconButton
                component={Link}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#f5f5f5',

                  width: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },

                  height: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },

                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#E1306C',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconBrandInstagram
                  size={20}
                />
              </IconButton>


              {/* WhatsApp */}

              <IconButton
                component={Link}
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#f5f5f5',

                  width: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },

                  height: {
                    xs: 34,
                    sm: 40,
                    md: 46,
                  },

                  transition: '.3s',

                  '&:hover': {
                    bgcolor: '#25D366',
                    color: '#fff',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <IconBrandWhatsapp
                  size={20}
                />
              </IconButton>

            </Box>
          </Grid>

        </Grid>


        {/* =========================
            BOTTOM
        ========================== */}

        <Divider
          sx={{
            my: {
              xs: 4,
              md: 5,
            },
          }}
        />

        <Typography
          textAlign="center"
          color="text.secondary"
          sx={{
            fontSize: {
              xs: 11,
              sm: 13,
              md: 14,
            },
          }}
        >
          © {new Date().getFullYear()} <b>Viniro</b>. All Rights Reserved.
        </Typography>

      </Container>
    </Box>
  );
}
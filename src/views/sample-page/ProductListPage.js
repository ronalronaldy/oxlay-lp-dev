import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, styled, Box } from '@mui/material';

import { botR4Black1, botR4Red1, r4Blcak1, r4Red1, sonDoff1, sonJ1 } from './DataUtils';
import { ArrowForward } from '@mui/icons-material';
const products = [
  {
    name: 'BOOTS',
    image: botR4Black1,
  },
  {
    name: 'SLIP-ON',
    image: sonJ1,
  },
  {
    name: 'LOW-CUT',
    image: r4Red1,
  },
];

export default function ProductGrid() {
  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto', p: 2 }}>
      <Grid container spacing={3}>
        {products.slice(0, 3).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRadius: 5,
                '@media (hover: hover)': {
                  '&:hover .product-image': {
                    transform: 'scale(1.1)',
                  },

                  '&:hover .product-overlay': {
                    backgroundColor: 'rgba(0,0,0,0.75)',
                  },

                  '&:hover .product-action': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },

                  '&:hover .product-arrow': {
                    opacity: 1,
                    transform: 'translateX(6px)',
                  },
                },
              }}
            >
              {/* IMAGE */}

              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                className="product-image"
                sx={{
                  borderRadius: 3,
                  height: {
                    xs: 240,
                    sm: 280,
                    md: 340,
                    lg: 420,
                  },
                  objectFit: 'cover',
                  transition: 'transform .5s ease',
                }}
              />

              {/* OVERLAY */}

              <Box
                className="product-overlay"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  // backgroundColor: 'rgba(0,0,0,0.15)',
                  transition: '.7s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* BUTTON TEXT */}

                <Box
                  className="product-action"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transform: 'translateY(10px)',
                    transition: '.4s ease',
                  }}
                >
                  <Typography
                    fontWeight={700}
                    textAlign="center"
                    sx={{
                      fontSize: {
                        xs: '0.8rem',
                        sm: '1.3rem',
                        md: '1.5rem',
                      },
                      color: '#ffff',
                    }}
                  >
                    Lihat Produk
                  </Typography>
                  <ArrowForward
                    className="product-arrow"
                    sx={{
                      color: '#ffff',
                      opacity: 0,
                      transform: 'translateX(-10px)',
                      transition: '.3s ease',
                      fontSize: {
                        xs: 18,
                        md: 22,
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* PRODUCT NAME */}

              <CardContent
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <Typography variant="h5" fontWeight={700} textAlign="center">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

import React from 'react';
import { Card, CardContent, CardMedia, Box, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const ProductCategoryCard = ({ item, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: 5,

        '@media (hover:hover)': {
          '&:hover .product-image': {
            transform: 'scale(1.08)',
          },

          '&:hover .product-overlay': {
            backgroundColor: 'rgba(0,0,0,.65)',
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
      <CardMedia
        component="img"
        image={item.thumbnail}
        alt={item.category}
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
          transition: '.5s',
        }}
      />

      <Box
        className="product-overlay"
        sx={{
          position: 'absolute',
          inset: 0,

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          transition: '.5s',

          // supaya Card menerima click
          pointerEvents: 'none',
        }}
      >
        <Box
          className="product-action"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,

            opacity: 0,
            transform: 'translateY(15px)',
            transition: '.4s',
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: {
                xs: 18,
                md: 22,
              },
            }}
          >
            Lihat Produk
          </Typography>

          <ArrowForward
            className="product-arrow"
            sx={{
              color: '#fff',
              opacity: 0,
              transform: 'translateX(-10px)',
              transition: '.3s',
            }}
          />
        </Box>
      </Box>

      <CardContent
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,

          background: 'linear-gradient(to top,rgba(0,0,0,.75),transparent)',
        }}
      >
        <Typography variant="h5" fontWeight={700} color="#fff" textAlign="center">
          {item.category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCategoryCard;

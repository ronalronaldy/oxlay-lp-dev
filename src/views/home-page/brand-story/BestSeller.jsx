import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import slipOnJ1 from 'src/assets/images/products/sonJ1.jpg';
import slipOnJ2 from 'src/assets/images/products/sonJ2.jpg';
import slipOnJ3 from 'src/assets/images/products/sonJ3.jpg';
import RatingStars from '../review/dekstop/RatingStars';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router';
const images = [slipOnJ3, slipOnJ1, slipOnJ2];

export default function BestSeller() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedImage, setSelectedImage] = useState(0);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ pt: 10 }}>
      <Chip
        // label={<Typography variant={isMobile ? 'h6' : 'h2'}>Our Best Selling</Typography>}
        label={<Typography variant={isMobile ? 'h6' : 'h2'}>PRODUK TERLARIS</Typography>}
        color="primary"
        variant="filled"
      />
      {/* Gambar Utama */}

      <Box
        sx={{
          mt: 5,
          position: 'relative',
          bgcolor: '#fff',
          borderRadius: 5,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,.12)',
          p: {
            xs: 2,
            md: 5,
          },
        }}
      >
        {/* Main Image */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: {
              xs: 250,
              sm: 350,
              md: 480,
            },
          }}
        >
          <Box
            component="img"
            src={images[selectedImage]}
            alt="Product"
            sx={{
              width: '100%',
              // maxWidth: 900,
              aspectRatio: '4/3',
              height: '100%',
              objectFit: 'contain',
              transition: '.4s ease',
            }}
          />
        </Box>

        {/* Thumbnail */}

        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            bottom: {
              xs: 15,
              md: 25,
            },
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2,
            zIndex: 2,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              onClick={() => setSelectedImage(index)}
              sx={{
                cursor: 'pointer',
                width: {
                  xs: 70,
                  sm: 90,
                  md: 120,
                },
                bgcolor: '#fff',
                borderRadius: 3,
                overflow: 'hidden',
                border: selectedImage === index ? '3px solid #111' : '2px solid transparent',
                transition: '.3s',

                boxShadow:
                  selectedImage === index
                    ? '0 12px 30px rgba(0,0,0,.25)'
                    : '0 8px 20px rgba(0,0,0,.12)',

                transform: selectedImage === index ? 'translateY(-8px)' : 'translateY(0)',

                '&:hover': {
                  transform: 'translateY(-8px)',
                },
              }}
            >
              <Box
                component="img"
                src={image}
                sx={{
                  width: '100%',
                  display: 'block',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box alignItems={'center'} mt={1.5}>
        <Typography>+10.000 Terjual dibeberapa marketplace</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            mt: 1,
          }}
        >
          <Typography>Rating</Typography>
          <RatingStars value={5} size={18} />
          <Typography>5/5</Typography>
        </Box>
        <Button onClick={() => navigate('/product-page/SON-JERUK')} endIcon={<ArrowForward />} size="small" sx={{ mt: 1 }} variant="outlined">
          Lihat Produk
        </Button>
      </Box>
    </Container>
  );
}

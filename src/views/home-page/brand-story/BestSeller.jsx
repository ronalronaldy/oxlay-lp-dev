import React, { useState } from 'react';

import { Box, Chip, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
// import { slipOnJ1, slipOnJ2, slipOnJ3 } from '../../../utils/data/product/image-list';
import slipOnJ1 from 'src/assets/images/products/sonJ1.jpg';
import slipOnJ2 from 'src/assets/images/products/sonJ2.jpg';
import slipOnJ3 from 'src/assets/images/products/sonJ3.jpg';
const images = [slipOnJ3, slipOnJ1, slipOnJ2];

export default function BestSeller() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Container maxWidth="lg" sx={{ pt: 10 }}>
      <Chip
        label={<Typography variant={isMobile ? 'h6' : 'h2'}>Our Best Selling</Typography>}
        color="primary"
        variant="filled"
      />
      <Box
        sx={{
          mt: 5,
          overflow: 'hidden',
          background: 'linear-gradient(180deg,#f8f9fb 0%,#ffffff 100%)',
        }}
      >
        {/* Gambar Utama */}

        <Box
          sx={{
            height: {
              xs: 250,
              sm: 320,
              md: 380,
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1800px',
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={images[selectedImage]}
            alt="Product"
            sx={{
              width: '100%',
              aspectRatio: '4/3',
              objectFit: 'cover',
              display: 'block',
              transition: '.35s',
              boxShadow: '0 5px 15px rgba(102, 18, 32, 0.80)',
            }}
          />
        </Box>

        {/* Thumbnail */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              onClick={() => setSelectedImage(index)}
              mt={isMobile ? 2 : 35}
              mb={5}
              sx={{
                cursor: 'pointer',
                width: {
                  xs: 80,
                  sm: 110,
                  md: 140,
                },
                borderRadius: 3,

                overflow: 'hidden',

                transition: '.3s',

                border: selectedImage === index ? '3px solid #000' : '2px solid transparent',

                transform: selectedImage === index ? 'scale(1.05)' : 'scale(1)',

                boxShadow:
                  selectedImage === index
                    ? '0 8px 25px rgba(25,118,210,.25)'
                    : '0 5px 15px rgba(0,0,0,.08)',

                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`Thumbnail ${index}`}
                sx={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

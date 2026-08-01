import React from 'react';
import { Box, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import { banners } from '../../../utils/data/home-page/data';

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: {
          xs: 'auto',
          md: '85vh',
        },
        mb: 1,
      }}
    >
      <Carousel
        autoPlay
        animation="fade"
        interval={6000}
        indicatorIconButtonProps={{
          style: {
            color: '#fff',
            marginTop: 10,
            },
            }}
      >
        {banners.map((item, index) => (
          <CardMedia
            key={index}
            component="img"
            image={item.image}
            sx={{
              width: '100%',
              height: {
                xs: 240,
                sm: 360,
                md: '85vh',
              },
              objectFit: 'cover',
              borderRadius: 4,
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSection;
import React from 'react';

import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

import ReviewHeader from './ReviewHeader';
import ReviewCarousel from './dekstop/ReviewCarousel';

import ReviewCarouselMobile from './mobile/ReviewCarouselMobile';
const ReviewSection = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <ReviewHeader mobileScreen={isMobile} />
      {isMobile ? <ReviewCarouselMobile /> : <ReviewCarousel />}
    </Box>
  );
};

export default ReviewSection;

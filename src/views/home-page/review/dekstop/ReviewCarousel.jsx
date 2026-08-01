import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Box } from '@mui/material';
import { reviews } from '../../../../utils/data/review/review-list';
import ReviewCard from './ReviewCard';
const ReviewCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });
  return (
    <Box ref={emblaRef} sx={{ overflow: 'hidden' }}>
      {' '}
      <Box sx={{ display: 'flex', gap: 4 }}>
        {' '}
        {reviews.map((review) => (
          <Box key={review.id} sx={{ flex: { md: '0 0 48%', lg: '0 0 38%', xl: '0 0 32%' } }}>
            {' '}
            <ReviewCard review={review} />{' '}
          </Box>
        ))}{' '}
      </Box>{' '}
    </Box>
  );
};
export default ReviewCarousel;

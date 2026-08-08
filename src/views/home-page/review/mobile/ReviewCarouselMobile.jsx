import React from 'react';

import { Box } from '@mui/material';

import useCoverflow from './useCoverflow';
import ReviewCardMobile from './ReviewCardMobile';

import CoverflowNavigation from './CoverflowNavigation';
import CoverflowIndicator from './CoverflowIndicator';
import { reviews } from '../../../../utils/data/review/review-list';

const ReviewCarouselMobile = () => {
  const { active, next, prev, goTo, getTransform, handlers } = useCoverflow(reviews.length);

  return (
    <Box
      sx={{
        width: '100vw',
        ml: 'calc(50% - 50vw)',
        mr: 'calc(50% - 50vw)',
        p: 0,
        m: 0,
        overflow: 'hidden',
        mb: 8,
      }}
    >
      {/* Coverflow */}

      <Box
        {...handlers}
        sx={{
          position: 'relative',
          width: '100%',
          height: 320,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '200px',
          touchAction: 'pan-y',
          userSelect: 'none',
        }}
      >
        {reviews.map((review, index) => {
          const style = getTransform(index);

          return (
            <ReviewCardMobile
              key={review.id}
              review={review}
              onClick={() => goTo(index)}
              {...style}
            />
          );
        })}
      </Box>
      <CoverflowIndicator total={reviews.length} active={active} onChange={goTo} />
    </Box>
  );
};

export default ReviewCarouselMobile;

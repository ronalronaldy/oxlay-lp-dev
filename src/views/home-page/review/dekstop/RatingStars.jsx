import React from 'react';
import { Box } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const RatingStars = ({ value, size }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.8,
      }}
    >
      {[...Array(5)].map((_, index) =>
        index < value ? (
          <Star
            key={index}
            sx={{
              color: '#FDB022',
              fontSize: size,
              // mb:2
            }}
          />
        ) : (
          <StarBorder
            key={index}
            sx={{
              color: '#D0D5DD',
              fontSize: size,
              // mb:2
            }}
          />
        ),
      )}
    </Box>
  );
};

export default RatingStars;
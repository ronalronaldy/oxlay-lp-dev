import React from 'react';
import { Box, Typography } from '@mui/material';
import { header } from '../../../utils/data/review/review-list';

const ReviewHeader = ({ mobileScreen }) => {
  const isMobile = mobileScreen;
  const text = header;
  return (
    <Box textAlign="center" mt={8} mb={8}>
      <Typography
        variant="h6"
        sx={{
          color: '#999',
          mb: 1,
        }}
      >
        {text.head}
      </Typography>

      <Typography variant={isMobile ? 'h4' : 'h2'}>{text.title}</Typography>
      <Typography variant="body1" sx={{ mt: 2, color: '#666' }}>{text.content}</Typography>
    </Box>
  );
};

export default ReviewHeader;

import React from 'react';
import { Box, Typography } from '@mui/material';

const ReviewHeader = ({ mobileScreen }) => {
  const isMobile = mobileScreen;
  return (
    <Box textAlign="center" mt={8} mb={8}>
      <Typography
        variant="h6"
        sx={{
          color: '#999',
          mb: 1,
        }}
      >
        CUSTOMER STORIES
      </Typography>

      <Typography variant={isMobile ? 'h4': 'h2'}>Apa Kata Pengguna OX-LAY</Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          color: '#666',
        }}
      >
        Lebih dari 10.000 pekerja telah mempercayai OXLAY sebagai sepatu kerja pilihan mereka.
        Berikut pengalaman nyata dari pelanggan kami.
      </Typography>
    </Box>
  );
};

export default ReviewHeader;

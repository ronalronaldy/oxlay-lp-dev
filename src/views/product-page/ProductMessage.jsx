import { Box, Typography } from '@mui/material';
import React from 'react';

const ProductMessage = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt:5
      }}
    >
      <Typography variant='h1'>
        Dirancang untuk bekerja, Dibuat untuk bertahan.
      </Typography>
      <Typography variant='body1' color="text.secondary" lineHeight={1.9}>
        Setiap produk OXLAY dibuat dengan perhatian terhadap material, konstruksi dan detail
        pengerjaan untuk memberikan perlindungan dan kenyamanan dalam aktivitas kerja sehari-hari.
      </Typography>
    </Box>
  );
};

export default ProductMessage;

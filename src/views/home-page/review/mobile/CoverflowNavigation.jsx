import React from 'react';

import { Box, IconButton } from '@mui/material';

import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

const buttonStyle = {
  width: 48,
  height: 48,

  borderRadius: '50%',

  bgcolor: '#fff',

  boxShadow: '0 8px 24px rgba(0,0,0,.12)',

  transition: '.3s',

  '&:hover': {
    bgcolor: 'primary.main',
    color: '#fff',
    transform: 'scale(1.08)',
  },
};

const CoverflowNavigation = ({ onPrev, onNext }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        gap: 2,

        mb: 3,
      }}
    >
      <IconButton onClick={onPrev} sx={buttonStyle}>
        <ArrowBackIosNew fontSize="small" />
      </IconButton>

      <IconButton onClick={onNext} sx={buttonStyle}>
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CoverflowNavigation;

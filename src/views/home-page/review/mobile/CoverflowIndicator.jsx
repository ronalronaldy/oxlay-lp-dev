import React from 'react';

import { Box } from '@mui/material';

const CoverflowIndicator = ({ total, active, onChange }) => {
  return (
    <Box
      sx={{
        mt: 3,

        display: 'flex',

        justifyContent: 'center',

        alignItems: 'center',

        gap: 1,
      }}
    >
      {Array.from({
        length: total,
      }).map((_, index) => (
        <Box
          key={index}
          onClick={() => onChange(index)}
          sx={{
            width: active === index ? 28 : 10,

            height: 10,

            borderRadius: 999,

            cursor: 'pointer',

            transition: '.35s cubic-bezier(.22,.61,.36,1)',

            bgcolor: active === index ? 'primary.main' : 'grey.400',

            '&:hover': {
              bgcolor: 'primary.main',
            },
          }}
        />
      ))}
    </Box>
  );
};

export default CoverflowIndicator;

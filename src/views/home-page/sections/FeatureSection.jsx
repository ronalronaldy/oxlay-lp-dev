import React from 'react';
import { Grid, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';

import { features } from '../../../utils/data/home-page/data';
import { motion } from 'framer-motion';
const FeatureSection = () => {
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        once: false,
        amount: 0.4,
      }}
    >
      <Grid container spacing={3} sx={{ mb: 2 }}>
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <>
              <Grid
                item
                xs={mobile ? 4 : 12}
                sm={mobile ? 2 : 4}
                key={item.title}
                textAlign="center"
              >
                {mobile ? (
                  <Tooltip title={item.title}>
                    <IconButton>
                      <Icon size={36} />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <>
                    <Icon size={48} />
                    <Typography variant={'h6'}>{item.title}</Typography>
                  </>
                )}
              </Grid>
            </>
          );
        })}
      </Grid>
    </motion.div>
  );
};

export default FeatureSection;

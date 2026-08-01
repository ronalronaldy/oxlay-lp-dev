import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
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
        amount: 0.2,
      }}
    >
      <Card
        sx={{
          borderRadius: 1,
          boxShadow: 6,
          mb: 6,
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 3,
              md: 5,
            },
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: '#999' }}>
            TENTANG KITA
          </Typography>

          <Typography variant="subtitle1" mt={2} color="text.secondary" fontWeight={600}>
            Berkomitmen untuk menawarkan dan menyediakan sepatu dengan desain premium yang dirancang
            untuk mengutamakan performa, perlindungan dan ketahanan. Produk kami dipercaya oleh para
            pekerja lapangan karena daya tahan dan kenyamanan saat bekerja di lingkungan produktif.
            produk yang kami jual memastikan anda tetap nyaman dan terlindungi setiap melangkah.
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AboutSection;

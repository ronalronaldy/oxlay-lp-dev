import { Box, Chip, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import StoryImage from './StoryImage';
import StoryContent from './StoryContent';
import { brandStory } from '../../../utils/data/home-page/brandStoryData';
import { useState } from 'react';
import CoverflowCarousel from './CoverflowCarousel';
import BestSeller from './BestSeller';

const BrandStorySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [active, setActive] = useState(2);

  const story = brandStory;
  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        width: '100%',

        bgcolor: '#fff',
        mt: isMobile ? 2 : 10,
      }}
    >
      <Chip
        label={
          <Typography
            variant={isMobile ? 'h4' : 'h2'}
            // sx={{
            //   WebkitTextStroke: '2px #fff',
            //   fontWeight: 900,
            // }}
          >
            WHO WE ARE
          </Typography>
        }
        variant="outlined"
      />
      <Typography
        variant={isMobile ? 'h6' : 'h4'}
        sx={{
          mt: 2,
          color: '#666',
        }}
      >Sepatu OX-LAY Dibuat Untuk Para Pekerja Keras</Typography>

      <CoverflowCarousel />
      <Typography
        variant={isMobile ? 'subtitle1' : 'h4'}
        sx={{
          mt: 2,
          color: '#666',
        }}
      >
        Dibuat secara lokal di Indonesia, dengan standar kualitas yang kami jaga di setiap proses
        produksi, OX-LAY menghadirkan sepatu kerja yang memadukan kekuatan, kenyamanan, dan desain
        fungsional. Dari bengkel produksi kami hingga sampai ke kaki para pekerja, setiap pasang
        sepatu dibuat dengan komitmen untuk memberikan perlindungan terbaik di lingkungan kerja.
      </Typography>

      <BestSeller />
    </Box>

    // <Container maxWidth="xl" sx={{ py: 12 }}>
    //   <Grid
    //     container
    //     spacing={12}
    //     alignItems="center"
    //   >
    //     <Grid item xs={12} md={6}>
    //       <StoryImage image={story.image} />
    //     </Grid>

    //     <Grid item xs={12} md={6}>
    //       <StoryContent story={story} />
    //     </Grid>
    //   </Grid>
    // </Container>
  );
};

export default BrandStorySection;

import React from 'react';
import { Card, CardContent, CardMedia, Grid, Link, Paper, Typography } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { Box } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import {
  Circle,
  CircleOutlined,
  FmdGoodTwoTone,
  LinkOffTwoTone,
  LocalMallTwoTone,
  LocalShippingTwoTone,
  LocationCity,
  LocationOnTwoTone,
  Map,
  PinDropTwoTone,
  PointOfSale,
  SimCardAlertOutlined,
  TripOrigin,
  ViewCarousel,
  ViewCarouselSharp,
} from '@mui/icons-material';

import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconAperture,
  IconUserCircle,
  IconApiApp,
  IconApps,
  IconHome,
  IconLocation,
  IconMap2,
  IconShoppingBag,
  IconCubeSend,
} from '@tabler/icons';

import { base64Image1, base64Image2, base64Image3, base64Image4 } from './DataUtils';
import ProductCarousel from './ProductListPage';
import { motion } from 'framer-motion';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Sample Page',
  },
];

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    image: base64Image1,
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
    image: base64Image4,
  },
  {
    name: 'Random Name #3',
    description: 'Hello World!',
    image: base64Image3,
  },
];

const SamplePage = () => {
  return (
    <PageContainer>
      <Box
        sx={{
          minHeight: {
            xs: 'auto',
            md: '90vh',
          },

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',

          mb: {
            xs: 3,
            md: 6,
          },
        }}
      >
        {/* Banner */}
        <Box>
          <Carousel
            autoPlay
            animation="fade"
            indicatorIconButtonProps={{
              style: {
                color: '#fff',
                marginTop: -80,
              },
            }}
          >
            {items.map((item, i) => (
              <CardMedia
                key={i}
                component="img"
                image={item.image}
                alt={`Preview ${i}`}
                sx={{
                  height: {
                    xs: 220,
                    sm: 350,
                    md: '75vh',
                  },

                  width: '100%',

                  objectFit: 'cover',

                  borderRadius: {
                    xs: 2,
                    md: 3,
                  },
                }}
              />
            ))}
          </Carousel>
        </Box>

        {/* Features */}
        <Grid
          container
          spacing={3}
          sx={{
            py: 2,
          }}
        >
          <Grid item xs={12} md={4} sm={4} textAlign="center">
            <IconShoppingBag size={window.innerWidth < 600 ? 32 : 45} />
            <Typography mt={1}>
              Telah Terjual 10000+ di berbagai Marketplace seperti Shopee, Tiktok dan Lazada
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sm={4} textAlign="center">
            <IconMap2 size={window.innerWidth < 600 ? 32 : 45} />
            <Typography mt={1}>Pengiriman dari Cakung, Jakarta Timur</Typography>
          </Grid>

          <Grid item xs={12} md={4} sm={4} textAlign="center">
            <IconCubeSend size={window.innerWidth < 600 ? 32 : 45} />
            <Typography mt={1}>Bebas Pilih Jenis Pengiriman</Typography>
          </Grid>
        </Grid>
      </Box>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
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
            boxShadow: 6,
            borderRadius: 3,

            mx: {
              xs: 1,
              md: 0,
            },

            mb: 4,
          }}
        >
          <CardContent sx={{ height: '100%' }}>
            <Typography
              variant="h5"
              component="div"
              textAlign="start"
              sx={{
                fontSize: {
                  xs: '0.85rem',
                  sm: '0.95rem',
                  md: '1rem',
                },
              }}
            >
              Viniro
            </Typography>
            <Typography
              mt={1}
              color="text.secondary"
              textAlign="justify"
              sx={{
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                  md: '1.05rem',
                },

                lineHeight: 1.8,
              }}
            >
              Berkomitmen untuk menawarkan dan menyediakan sepatu dengan desain premium yang
              dirancang untuk mengutamakan performa, perlindungan dan ketahanan. Produk kami
              dipercaya oleh para pekerja lapangan karena daya tahan dan kenyamanan saat bekerja di
              lingkungan produktif. produk yang kami jual memastikan anda tetap nyaman dan
              terlindungi setiap melangkah.
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{
          opacity: -6,
          y: 100,
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
        <ProductCarousel />
      </motion.div>
    </PageContainer>
  );
};

export default SamplePage;

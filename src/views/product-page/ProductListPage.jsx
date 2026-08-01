import React, { useMemo, useState } from 'react';

import { Box, Button, Chip, Container, Grid, Stack, Typography } from '@mui/material';

import ProductCard from './ProductCard';

import { detailProducts } from '../../utils/data/product/product-list';
import { useSearchParams } from 'react-router-dom';

const categoryColors = {
  Semua: 'linear-gradient(135deg,#2563EB 0%,#3B82F6 100%)',
  'Slip-On': 'linear-gradient(135deg,#F97316 0%,#FB923C 100%)',
  'Low-Cut': 'linear-gradient(135deg,#10B981 0%,#34D399 100%)',
  'Steel Toe': 'linear-gradient(135deg,#7C3AED 0%,#A855F7 100%)',
};

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get('category') || 'Semua';

  const categories = useMemo(() => {
    return ['Semua', ...new Set(detailProducts.map((item) => item.category))];
  }, []);

  const filteredProducts =
    selectedCategory === 'Semua'
      ? detailProducts
      : detailProducts.filter((item) => item.category === selectedCategory);
  return (
    <Box
      sx={{
        backgroundColor: '#f8f8f8',

        py: {
          xs: 6,
          md: 10,
        },
      }}
    >
      <Container maxWidth="xl">
        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <Box
          sx={{
            textAlign: 'center',

            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 12,

              fontWeight: 700,

              letterSpacing: 3,

              color: '#999',

              mb: 1,
            }}
          >
            OUR COLLECTION
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: 32,
                md: 46,
              },

              fontWeight: 300,

              color: '#111',

              mb: 2,
            }}
          >
            Koleksi OXLAY
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,

              mx: 'auto',

              color: '#777',

              lineHeight: 1.8,

              fontSize: {
                xs: 14,
                md: 16,
              },
            }}
          >
            Temukan sepatu kerja yang dirancang untuk memberikan perlindungan, kenyamanan, dan
            ketahanan dalam setiap aktivitas kerja.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: {
              xs: 4,
              md: 6,
            },
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              overflowX: 'auto',
              pb: 0,

              '&::-webkit-scrollbar': {
                display: 'none',
              },

              scrollbarWidth: 'none',
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                size="small"
                clickable
                label={category}
                onClick={() => {
                  if (category === 'Semua') {
                    setSearchParams({});
                  } else {
                    setSearchParams({
                      category,
                    });
                  }
                }}
                sx={{
                  background: selectedCategory === category ? categoryColors[category] : '#fff',

                  color: selectedCategory === category ? '#fff' : '#666',

                  border: `1px solid ${categoryColors[category]}`,

                  transition: '.6s',

                  '&:hover': {
                    background: categoryColors[category],
                    color: '#fff',
                    transform: category == 'Steel Toe' ? 'translatex(-4px)' : 'translatex(5px)',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
        {/* ========================= */}
        {/* PRODUCT GRID */}
        {/* ========================= */}

        <Grid
          container
          spacing={{
            xs: 2,
            sm: 3,
            md: 4,
          }}
        >
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={product.sku}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductListPage;

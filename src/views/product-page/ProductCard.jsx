import React from 'react';

import { Box, Button, Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';

import { ArrowForward, WhatsApp } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const   ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo Admin, saya ingin bertanya mengenai ${product.name} (${product.sku})`,
    );

    window.open(`https://wa.me/${product.whatsapp}?text=${message}`, '_blank');
  };

  const handleMarketplace = () => {
    window.open(product.marketplace.shopee, '_blank');
  };

  const handleDetail = () => {
    navigate(`/product-page/${product.sku}`);
  };

  // console.log(JSON.stringify(product));
  

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

        borderRadius: 4,

        overflow: 'hidden',

        backgroundColor: '#fff',

        border: '1px solid #cec4c4',

        transition: 'all .35s ease',

        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 18px 45px rgba(0,0,0,.12)',
        },
      }}
    >
      {/* ========================= */}
      {/* IMAGE */}
      {/* ========================= */}

      <Box
        sx={{
          position: 'relative',

          backgroundColor: '#f6f6f6',

          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={product.imageList[0]}
          alt={product.name}
          sx={{
            display: 'block',

            width: '100%',

            height: {
              xs: 280,
              sm: 300,
              md: 330,
            },

            objectFit: 'cover',

            transition: 'transform .5s ease',

            '.MuiCard-root:hover &': {
              transform: 'scale(1.05)',
            },
          }}
        />

        {/* STOCK */}

        <Chip
          label={product.instock ? 'IN STOCK' : 'OUT OF STOCK'}
          size="small"
          sx={{
            position: 'absolute',

            top: 15,
            right: 15,

            fontSize: 11,

            fontWeight: 700,

            letterSpacing: 0.5,

            backgroundColor: product.instock ? '#e8f5e9' : '#ffebee',

            color: product.instock ? '#2e7d32' : '#c62828',
          }}
        />
      </Box>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <CardContent
        sx={{
          p: {
            xs: 2.5,
            md: 3,
          },

          display: 'flex',
          flexDirection: 'column',

          flexGrow: 1,
        }}
      >
        {/* CATEGORY */}

        <Typography
          sx={{
            letterSpacing: 1.5,

            color: '#999',

            mb: 0.7,
          }}
          variant='overline'
        >
          {product.category}
        </Typography>

        {/* PRODUCT NAME */}

        <Typography
          sx={{
            mb: 0.5,
          }}
          variant='h4'
        >
          {product.name}
        </Typography>

        {/* SKU */}

        <Typography
          sx={{
            color: '#888',
            mb: 2,
          }}
          variant='overline'
        >
          SKU: {product.sku}
        </Typography>

        <Divider sx={{ mb: 2.5 }} />

        {/* COLOR */}

        <Typography
          sx={{
            color: '#777',

            mb: 1,
          }}
          variant='overline'

        >
          Warna
        </Typography>

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 18,
              height: 18,

              borderRadius: '50%',

              backgroundColor: product.color.colorCode,

              border: '2px solid #fff',

              boxShadow: '0 0 0 1px #ccc',
            }}
          />

          <Typography
            sx={{
              color: '#333',
            }}
            variant='h6'
          >
            {product.color.colorName}
          </Typography>
        </Stack>

        {/* MATERIAL */}

        <Typography
          sx={{
            fontSize: 13,

            color: '#777',

            mb: 0.5,
          }}
          variant='overline'
        >
          Material
        </Typography>

        <Typography
          sx={{
            color: '#333',

            mb: 3,
          }}
          variant='h6'
        >
          {product.material}
        </Typography>

        {/* ========================= */}
        {/* BUTTON */}
        {/* ========================= */}
          {/* DETAIL */}

          <Button
            fullWidth
            variant="outlined"
            endIcon={<ArrowForward />}
            onClick={handleDetail}
            sx={{
              borderRadius: 999,

              py: 1.2,

              textTransform: 'none',

              fontWeight: 600,

              color: '#222',

              borderColor: '#222',

              '&:hover': {
                backgroundColor: '#222',

                color: '#fff',

                borderColor: '#222',
              },
            }}
          >
            Lihat Detail
          </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

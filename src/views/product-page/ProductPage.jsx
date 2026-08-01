import React from 'react';
import { Box, Button, Chip, Container, Grid, IconButton, Typography } from '@mui/material';

import { ArrowBack, ArrowForward, CheckCircle, WhatsApp } from '@mui/icons-material';

import { useNavigate, useParams } from 'react-router-dom';

import Carousel from 'react-material-ui-carousel';
import ProductMessage from './ProductMessage';
import { useProducts } from '../../utils/hooks/useProducts';
import { detailProducts } from '../../utils/data/product/product-list';

const ProductPage = () => {
  const navigate = useNavigate();
  const { sku } = useParams();
  const detatilProudct = detailProducts;
  // const product = products.find((item) => item.sku === sku);
  const productsMp = useProducts();
  // console.log('products =', products);
  
  
  if (detailProducts.length === 0) {
    return <>Loading...</>;
  }
  const product = detailProducts.find((item) => item.sku === sku);
  // console.log('product =', product);
  // console.log('sku url =', sku);
  
  if (!product) {
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Produk tidak ditemukan
          </Typography>

          <Button variant="contained" onClick={() => navigate('/product')}>
            Kembali ke Produk
          </Button>
        </Box>
      </Container>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Halo Admin, saya tertarik dengan produk ${product.name} (${product.sku}).`,
  );

  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        py: {
          xs: 2,
          sm: 4,
          md: 6,
        },
      }}
    >
      <Container maxWidth="xl">
        {/* BACK BUTTON */}

        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 3,
            color: '#222',
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Kembali ke Produk
        </Button>

        {/* ================================================= */}
        {/* PRODUCT DETAIL */}
        {/* ================================================= */}

        <Box
          sx={{
            backgroundColor: '#fff',
            borderRadius: {
              xs: 3,
              md: 5,
            },
            overflow: 'hidden',
          }}
        >
          <Grid container>
            {/* ================= IMAGE ================= */}

            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  p: {
                    xs: 1.5,
                    sm: 3,
                    md: 4,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: '#f7f7f7',
                    borderRadius: 4,
                    overflow: 'hidden',
                  }}
                >
                  <Carousel
                    autoPlay={false}
                    animation="fade"
                    navButtonsAlwaysVisible
                    indicators={product.imageList?.length > 1}
                    duration={500}
                    navButtonsProps={{
                      style: {
                        backgroundColor: 'rgba(0,0,0,0.45)',
                        borderRadius: '50%',
                        width: 42,
                        height: 42,
                      },
                    }}
                    indicatorIconButtonProps={{
                      style: {
                        padding: '6px',
                      },
                    }}
                    activeIndicatorIconButtonProps={{
                      style: {
                        color: '#111',
                      },
                    }}
                    sx={{
                      width: '100%',
                    }}
                  >
                    {product.imageList?.map((image, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: '100%',
                          height: {
                            xs: 350,
                            sm: 500,
                            md: 650,
                          },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#f7f7f7',
                        }}
                      >
                        <Box
                          component="img"
                          src={image}
                          alt={`${product.name} - ${index + 1}`}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block',
                          }}
                        />
                      </Box>
                    ))}
                  </Carousel>
                  {/* STOCK */}

                  {/* <Chip
                    icon={<CheckCircle />}
                    label={product.instock ? 'IN STOCK' : 'OUT OF STOCK'}
                    color={product.instock ? 'success' : 'default'}
                    sx={{
                      position: 'absolute',
                      right: 20,
                      bottom: 20,
                      fontWeight: 700,
                    }}
                  /> */}
                </Box>
              </Box>
            </Grid>

            {/* ================= INFORMATION ================= */}

            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: '100%',
                  p: {
                    xs: 3,
                    sm: 4,
                    md: 6,
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                {/* CATEGORY */}

                <Typography
                  sx={{
                    fontSize: 14,
                    color: '#777',
                    letterSpacing: 2,
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {product.category || 'SAFETY SHOES'}
                </Typography>

                {/* NAME */}

                <Typography
                  sx={{
                    lineHeight: 1.1,
                    mb: 1,
                  }}
                  variant="h2"
                >
                  {product.name}
                </Typography>

                {/* SKU */}

                <Typography
                  sx={{
                    color: '#777',
                    mb: 3,
                  }}
                >
                  Safety Shoes • SKU: {product.sku}
                </Typography>

                {/* STOCK */}

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: product.instock ? '#2e7d32' : '#999',
                    }}
                  />

                  <Typography
                    sx={{
                      color: product.instock ? '#2e7d32' : '#777',
                      fontWeight: 600,
                    }}
                  >
                    {product.instock ? 'Stok tersedia' : 'Stok habis'}
                  </Typography>
                </Box>

                {/* COLOR */}

                <Typography fontWeight={600} mb={1}>
                  Warna
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      backgroundColor: product.color?.colorCode || '#222',
                      border: '2px solid #fff',
                      boxShadow: '0 0 0 1px #ccc',
                    }}
                  />

                  <Typography>{product.color?.colorName || '-'}</Typography>
                </Box>

                {/* MATERIAL */}

                <Typography fontWeight={600} mb={1}>
                  Material
                </Typography>

                <Box
                  sx={{
                    border: '1px solid #222',
                    borderRadius: 3,
                    px: 2,
                    py: 1.5,
                    width: 'fit-content',
                    mb: 4,
                  }}
                >
                  <Typography>Synthetic Leather Premium</Typography>
                </Box>

                {/* BENEFITS */}

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    mb: 4,
                  }}
                >
                  {[
                    'Outsole dijahit dengan mesin presisi',
                    'Material premium',
                    'Kontrol kualitas ketat',
                  ].map((text) => (
                    <Box
                      key={text}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <CheckCircle
                        sx={{
                          fontSize: 18,
                          color: '#2e7d32',
                        }}
                      />

                      <Typography variant="body2">{text}</Typography>
                    </Box>
                  ))}
                </Box>

                {/* CTA */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                  }}
                >
                  {productsMp?.map((marketplace) => {
                    const marketplaceUrl =
                      marketplace.id === 'whatsapp'
                        ? `https://wa.me/${marketplace.whatsapp}?text=${whatsappMessage}`
                        : marketplace.url;

                    const isWhatsapp = marketplace.id === 'whatsapp';

                    return (
                      <Button
                        key={marketplace.id}
                        component="a"
                        href={marketplaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant={isWhatsapp ? 'outlined' : 'contained'}
                        startIcon={isWhatsapp ? <WhatsApp /> : null}
                        endIcon={!isWhatsapp ? <ArrowForward /> : null}
                        fullWidth
                        sx={{
                          py: 1.5,
                          borderRadius: 999,
                          textTransform: 'none',
                          fontWeight: 700,

                          ...(isWhatsapp
                            ? {
                                borderColor: '#222',
                                color: '#222',

                                '&:hover': {
                                  backgroundColor: '#f5f5f5',
                                  borderColor: '#222',
                                },
                              }
                            : {
                                backgroundColor: '#111',

                                '&:hover': {
                                  backgroundColor: '#333',
                                },
                              }),
                        }}
                      >
                        {isWhatsapp ? marketplace.name : `Beli di ${marketplace.name}`}
                      </Button>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* ================================================= */}
        {/* BRAND MESSAGE */}
        {/* ================================================= */}

        <ProductMessage />

        {/* ================================================= */}
        {/* QUALITY SECTION */}
        {/* ================================================= */}

        <Grid
          container
          spacing={{
            xs: 5,
            md: 3,
          }}
        >
          {/* ITEM 1 */}

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 4,
                p: {
                  xs: 3,
                  md: 4,
                },
                height: '100%',
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 300,
                  mb: 2,
                }}
              >
                01
              </Typography>

              <Typography variant="h5" fontWeight={700} mb={2}>
                Jahitan Presisi
              </Typography>

              <Typography color="text.secondary" lineHeight={1.8}>
                Outsole dipasang menggunakan proses penjahitan mesin yang presisi untuk membantu
                menjaga kekuatan dan ketahanan konstruksi sepatu.
              </Typography>
            </Box>
          </Grid>

          {/* ITEM 2 */}

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 4,
                p: {
                  xs: 3,
                  md: 4,
                },
                height: '100%',
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 300,
                  mb: 2,
                }}
              >
                02
              </Typography>

              <Typography variant="h5" fontWeight={700} mb={2}>
                Material Premium
              </Typography>

              <Typography color="text.secondary" lineHeight={1.8}>
                Material dipilih dengan mempertimbangkan kenyamanan, tampilan dan daya tahan untuk
                penggunaan sehari-hari.
              </Typography>
            </Box>
          </Grid>

          {/* ITEM 3 */}

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#fff',
                borderRadius: 4,
                p: {
                  xs: 3,
                  md: 4,
                },
                height: '100%',
              }}
            >
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 300,
                  mb: 2,
                }}
              >
                03
              </Typography>

              <Typography variant="h5" fontWeight={700} mb={2}>
                Quality Control
              </Typography>

              <Typography color="text.secondary" lineHeight={1.8}>
                Setiap detail diperhatikan melalui proses pemeriksaan kualitas sebelum produk siap
                digunakan oleh pelanggan.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPage;

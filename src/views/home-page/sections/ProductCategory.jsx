import React, { useCallback } from 'react';

import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';

import { ArrowForward, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import { productCategories } from '../../../utils/data/product/Productcategory-list';
import useEmblaCarousel from 'embla-carousel-react';

export default function ProductGrid() {
  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleOpenCategory = (category) => {
    navigate(`/product-page?category=${encodeURIComponent(category)}`);
  };

  return (
    <Box
      sx={{
        position: 'relative',

        width: '100vw',

        marginLeft: 'calc(50% - 50vw)',

        px: {
          xs: 2,
          sm: 3,
          md: 5,
          lg: 6,
        },

        overflow: 'hidden',
      }}
    >
      {/* BUTTON */}

      <IconButton
        onClick={scrollPrev}
        sx={{
          position: 'absolute',

          left: {
            xs: 8,
            md: 20,
          },

          top: '50%',

          transform: 'translateY(-50%)',

          zIndex: 10,

          width: 52,
          height: 52,

          bgcolor: '#fff',

          boxShadow: '0 12px 35px rgba(0,0,0,.15)',

          '&:hover': {
            bgcolor: '#fff',
            transform: 'translateY(-50%) scale(1.05)',
          },
        }}
      >
        <ArrowBackIosNew />
      </IconButton>

      <IconButton
        onClick={scrollNext}
        sx={{
          position: 'absolute',

          right: {
            xs: 8,
            md: 20,
          },

          top: '50%',

          transform: 'translateY(-50%)',

          zIndex: 10,

          width: 52,
          height: 52,

          bgcolor: '#fff',

          boxShadow: '0 12px 35px rgba(0,0,0,.15)',

          '&:hover': {
            bgcolor: '#fff',
            transform: 'translateY(-50%) scale(1.05)',
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* EMBLA */}

      <Box
        ref={emblaRef}
        sx={{
          overflow: 'hidden',

          pb: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',

            ml: '-12px',
          }}
        >
          {productCategories.map((item) => (
            <Box
              key={item.category}
              sx={{
                flex: {
                  xs: '0 0 100%',
                  sm: '0 0 50%',
                  lg: '0 0 33.333%',
                },

                minWidth: 0,

                px: 3,
              }}
            >
              <Card
                onClick={() => handleOpenCategory(item.category)}
                sx={{
                  position: 'relative',
                  scale: 1.03,
                  cursor: 'pointer',
                  borderRadius: 1,
                  overflow: 'hidden',
                  boxShadow: 3,
                  transition: '.35s',

                  '&:hover': {
                    boxShadow: 8,
                  },

                  '&:hover .product-image': {
                    transform: 'scale(1.1)',
                  },

                  '&:hover .overlay': {
                    background: 'rgba(0,0,0,.55)',
                  },

                  '&:hover .action': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },

                  '&:hover .arrow': {
                    opacity: 1,
                    transform: 'translateX(6px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.thumbnail}
                  className="product-image"
                  sx={{
                    width: '100%',

                    aspectRatio: {
                      xs: ' 1/ 1',
                      md: '1 / 1',
                    },

                    objectFit: 'cover',

                    transition: 'transform .5s ease',
                  }}
                />

                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    transition: '.4s',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    className="action"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,

                      opacity: 0,
                      transform: 'translateY(15px)',
                      transition: '.4s',
                    }}
                  >
                    <Typography color="#fff" fontWeight={700} fontSize={22}>
                      Lihat Produk
                    </Typography>

                    <ArrowForward
                      className="arrow"
                      sx={{
                        color: '#fff',
                        opacity: 0,
                        transform: 'translateX(-10px)',
                        transition: '.3s',
                      }}
                    />
                  </Box>
                </Box>

                <CardContent
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,

                    background: 'linear-gradient(to top,rgba(0,0,0,.75),transparent)',
                  }}
                >
                  <Typography color="#fff" fontWeight={700} textAlign="center" variant="h5">
                    {item.category}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

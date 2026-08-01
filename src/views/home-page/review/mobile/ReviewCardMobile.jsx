import React from 'react';

import { Avatar, Box, Card, CardMedia, Stack, Typography } from '@mui/material';
import RatingStars from '../dekstop/RatingStars';

const ReviewCardMobile = ({
  review,
  onClick,
  translateX,
  scale,
  rotate,
  opacity,
  blur,
  zIndex,
  active,
}) => {
  return (
    <Card
      onClick={onClick}
      elevation={0}
      sx={{
        position: 'absolute',

        left: '50%',
        top: '50%',

        width: 300,

        borderRadius: 5,

        overflow: 'hidden',

        cursor: 'pointer',

        border: active ? '2px solid' : '1px solid',

        borderColor: active ? 'primary.main' : 'divider',

        bgcolor: '#fff',

        transform: `
            translate(-50%,-50%)
            translateX(${translateX}px)
            scale(${scale})
            rotateY(${rotate}deg)
        `,

        transformStyle: 'preserve-3d',

        opacity,

        zIndex,

        filter: `blur(${blur}px)`,

        transition:
          'transform .55s cubic-bezier(.22,.61,.36,1),opacity .55s,filter .55s,box-shadow .4s',

        boxShadow: active ? '0 30px 70px rgba(0,0,0,.8)' : '0 12px 30px rgba(0,0,0,.8)',

        '&:hover': {
          boxShadow: '0 35px 80px rgba(0,0,0,.15)',
        },
      }}
    >
      {/* HEADER */}

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{
          p: 2,
        }}
      >
        <Avatar
          src={review.avatar}
          sx={{
            width: 54,
            height: 54,
          }}
        />

        <Box flex={1}>
          <Typography fontWeight={700} fontSize={15}>
            {review.username}
          </Typography>

          <RatingStars rating={review.rating} />
        </Box>
      </Stack>

      {/* COMMENT */}

      <Typography
        sx={{
          px: 2,
          color: 'text.secondary',
          lineHeight: 1.8,
          fontSize: 14,

          minHeight: 95,
        }}
      >
        {review.comment}
      </Typography>

      {/* IMAGE */}

      {review.images?.length > 0 && (
        <CardMedia
          component="img"
          image={review.images[0]}
          sx={{
            mt: 2,

            width: '100%',

            aspectRatio: '4/3',

            objectFit: 'cover',

            transition: '.4s',
          }}
        />
      )}

      {/* FOOTER */}

      <Box
        sx={{
          display: 'flex',

          justifyContent: 'space-between',

          alignItems: 'center',

          px: 2,
          py: 1.5,

          bgcolor: active ? 'primary.main' : '#fafafa',

          transition: '.4s',
        }}
      >
        <Typography fontSize={12} fontWeight={700} color={active ? '#fff' : 'text.secondary'}>
          Pembeli Terverifikasi
        </Typography>

        <Typography fontSize={12} fontWeight={600} color={active ? '#fff' : 'text.secondary'}>
          ⭐ {review.rating}/5
        </Typography>
      </Box>
    </Card>
  );
};

export default ReviewCardMobile;

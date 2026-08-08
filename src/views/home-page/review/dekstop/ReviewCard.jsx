import React from 'react';

import { Avatar, Box, Card, Chip, Divider, Grid, Stack, Typography } from '@mui/material';

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';

import RatingStars from './RatingStars';

const ReviewCard = ({ review }) => {
  return (
    <Card
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 12px 35px rgba(0,0,0,.08)',
        transition: '.35s',

        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 24px 50px rgba(0,0,0,.15)',
        },
      }}
    >
      {/* ================= HEADER ================= */}

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1.5} alignItems="center"> 
          <Chip
            size="small"
            icon={<VerifiedIcon />}
            label="Verified Review"
            color="success"
            variant="outlined"
          />
        </Stack>

        <Typography variant="body2" color="text.secondary">
          {review.reviewDate} • Variasi {review.variation}
        </Typography>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* ================= USER ================= */}

      <Stack alignItems="center" spacing={1} mb={3}>
        <Avatar
          src={review.avatar}
          sx={{
            width: 72,
            height: 72,
          }}
        />

        <Typography fontWeight={700} fontSize={18}>
          {review.username}
        </Typography>
      </Stack>

      {/* ================= CONTENT ================= */}

      <Grid container spacing={4} alignItems="center">
        {/* FOTO */}

        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={review.image}
            alt={review.username}
            sx={{
              width: '100%',
              borderRadius: 4,
              objectFit: 'cover',
            }}
          />
        </Grid>

        {/* RATING */}

        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <RatingStars value={review.rating} size={18}  />

              <Typography variant="h5" fontWeight={700}>
                {review.rating}.0
              </Typography>
            </Stack>

            {review.specs.map((item) => (
              <Stack key={item.title} direction="row" justifyContent="space-between">
                <Typography color="text.secondary">{item.title}</Typography>

                <Typography fontWeight={700}>{item.value}</Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* ================= COMMENT ================= */}

      <Typography
        sx={{
          fontStyle: 'italic',
          lineHeight: 1.9,
          fontSize: 17,
          color: 'text.primary',
        }}
      >
        "{review.comment}"
      </Typography>

      <Divider sx={{ my: 3 }} />

      {/* ================= FOOTER ================= */}

      <Stack direction="row" spacing={1} alignItems="center">
        <ThumbUpAltOutlinedIcon fontSize="small" color="action" />

        <Typography variant="body2" color="text.secondary">
          {review.helpful} Orang merasa review ini membantu
        </Typography>
      </Stack>
    </Card>
  );
};

export default ReviewCard;

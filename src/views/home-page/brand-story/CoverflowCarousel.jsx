import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, IconButton } from '@mui/material';
import {
  ArrowBackIosNew,
  ArrowForwardIos,
} from '@mui/icons-material';

import { botR4Red1, sonDoff1 } from '../../sample-page/DataUtils';
import {
  r4Black2,
  r4Black3,
  slipOnJ3,
} from '../../../utils/data/product/image-list';

const images = [
  sonDoff1,
  slipOnJ3,
  r4Black3,
  r4Black2,
  botR4Red1,
];

const AUTO_PLAY_DELAY = 3000;

export default function CoverflowCarousel() {
  const [active, setActive] = useState(2);

  const timer = useRef(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();

    timer.current = setInterval(() => {
      next();
    }, AUTO_PLAY_DELAY);
  }, [next, stopAutoPlay]);

  useEffect(() => {
    startAutoPlay();

    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  const getOffset = (index) => {
    let offset = index - active;

    if (offset > images.length / 2) offset -= images.length;
    if (offset < -images.length / 2) offset += images.length;

    return offset;
  };

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <Box
        sx={{
          height: {
            xs: 250,
            sm: 320,
            md: 380,
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '1800px',
          position: 'relative',
        }}
      >
        {images.map((image, index) => {
          const offset = getOffset(index);

          let scale = 0;
          let translateX = 0;
          let opacity = 0;
          let zIndex = 0;
          let rotate = 0;

          switch (offset) {
            case -2:
              scale = 0.72;
              translateX = -260;
              opacity = 0.35;
              rotate = -12;
              zIndex = 1;
              break;

            case -1:
              scale = 0.86;
              translateX = -140;
              opacity = 0.75;
              rotate = -6;
              zIndex = 5;
              break;

            case 0:
              scale = 1;
              translateX = 0;
              opacity = 1;
              rotate = 0;
              zIndex = 10;
              break;

            case 1:
              scale = 0.86;
              translateX = 140;
              opacity = 0.75;
              rotate = 6;
              zIndex = 5;
              break;

            case 2:
              scale = 0.72;
              translateX = 260;
              opacity = 0.35;
              rotate = 12;
              zIndex = 1;
              break;

            default:
              opacity = 0;
          }

          return (
            <Box
              key={index}
              onClick={() => setActive(index)}
              sx={{
                position: 'absolute',

                width: {
                  xs: 170,
                  sm: 220,
                  md: 260,
                  lg: 290,
                },

                aspectRatio: '4/3',

                borderRadius: 5,

                overflow: 'hidden',

                cursor: 'pointer',

                transition:
                  'all .55s cubic-bezier(.22,.61,.36,1)',

                transform: `
                  translateX(${translateX}px)
                  translateZ(${offset === 0 ? 80 : 0}px)
                  rotateY(${rotate}deg)
                  scale(${scale})
                `,

                opacity,

                zIndex,

                boxShadow:
                  offset === 0
                    ? '0 35px 80px rgba(0,0,0,.28)'
                    : '0 15px 35px rgba(0,0,0,.18)',
              }}
            >
              <Box
                component="img"
                src={image}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          );
        })}
      </Box>

      <IconButton
        onClick={() => {
          stopAutoPlay();
          prev();
          startAutoPlay();
        }}
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'white',
          '&:hover': {
            bgcolor: 'white',
          },
        }}
      >
        <ArrowBackIosNew />
      </IconButton>

      <IconButton
        onClick={() => {
          stopAutoPlay();
          next();
          startAutoPlay();
        }}
        sx={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'white',
          '&:hover': {
            bgcolor: 'white',
          },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}
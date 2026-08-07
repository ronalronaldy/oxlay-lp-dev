  import React, { useState, useEffect, useRef, useCallback } from 'react';
  import { Box, IconButton } from '@mui/material';
  import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

  import bS1 from 'src/assets/images/brandStory/BStory1.jpg';
  import bS2 from 'src/assets/images/brandStory/BStory2.jpg';
  import bS3 from 'src/assets/images/brandStory/BStory3.jpg';
  import bS4 from 'src/assets/images/brandStory/BStory4.jpg';
  import bS5 from 'src/assets/images/brandStory/BStory5.jpg';

  const images = [bS1, bS2, bS3, bS4, bS5];

  const AUTO_PLAY_DELAY = 7000;

  export default function CoverflowCarousel() {
    const [active, setActive] = useState(2);

    const timer = useRef(null);

    const next = useCallback(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, []);

    const prev = useCallback(() => {
      setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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
        // onMouseEnter={stopAutoPlay}
        // onMouseLeave={startAutoPlay}
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

                  width: '50%',

                  aspectRatio: '4/3',

                  borderRadius: 2,

                  overflow: 'hidden',

                  cursor: 'pointer',

                  transition: 'all .55s cubic-bezier(.22,.61,.36,1)',

                  transform: `
                    translateX(${translateX}px)
                    translateZ(${offset === 0 ? 80 : 0}px)
                    rotateY(${rotate}deg)
                    scale(${scale})
                  `,

                  opacity,

                  zIndex,

                  boxShadow:
                    offset === 0 ? '0 35px 80px rgba(255, 0, 0, 0.19)' : '0 15px 35px rgba(0, 0, 0, 0.77)',
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`story-${index}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            );
          })}
        </Box>

        <IconButton
        size=	'small'
          onClick={() => {
            // stopAutoPlay();
            prev();
            // startAutoPlay();
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
        size='small'
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

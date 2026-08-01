import { useCallback, useEffect, useRef, useState } from 'react';

const AUTO_PLAY_DELAY = 4000;
const SWIPE_THRESHOLD = 60;

export default function useCoverflow(totalItems) {
  const [active, setActive] = useState(0);

  const startX = useRef(0);
  const endX = useRef(0);

  const timer = useRef(null);

  /* ===========================
      NEXT
  =========================== */

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  /* ===========================
      PREV
  =========================== */

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  /* ===========================
      GOTO
  =========================== */

  const goTo = useCallback(
    (index) => {
      if (index < 0) index = totalItems - 1;

      if (index >= totalItems) index = 0;

      setActive(index);
    },
    [totalItems],
  );

  /* ===========================
      AUTOPLAY
  =========================== */

  const stopAutoPlay = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
  };

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();

    timer.current = setInterval(() => {
      next();
    }, AUTO_PLAY_DELAY);
  }, [next]);

  useEffect(() => {
    startAutoPlay();

    return () => stopAutoPlay();
  }, [startAutoPlay]);

  /* ===========================
      TOUCH
  =========================== */

  const onTouchStart = (e) => {
    stopAutoPlay();

    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const distance = startX.current - endX.current;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      if (distance > 0) {
        next();
      } else {
        prev();
      }
    }

    startAutoPlay();
  };

  /* ===========================
      MOUSE
  =========================== */

  const onMouseEnter = () => {
    stopAutoPlay();
  };

  const onMouseLeave = () => {
    startAutoPlay();
  };

  /* ===========================
      TRANSFORM
  =========================== */

  const getTransform = (index) => {
    let offset = index - active;

    if (offset > totalItems / 2) offset -= totalItems;

    if (offset < -totalItems / 2) offset += totalItems;

    let scale = 0;
    let rotate = 0;
    let translateX = 0;
    let opacity = 0;
    let blur = 0;
    let zIndex = 0;

    switch (offset) {
      case -2:
        scale = 0.65;
        rotate = 35;
        translateX = -260;
        opacity = 0.25;
        blur = 2;
        zIndex = 1;
        break;

      case -1:
        scale = 0.82;
        rotate = 20;
        translateX = -140;
        opacity = 0.65;
        blur = 1;
        zIndex = 2;
        break;

      case 0:
        scale = 1;
        rotate = 0;
        translateX = 0;
        opacity = 1;
        blur = 0;
        zIndex = 10;
        break;

      case 1:
        scale = 0.82;
        rotate = -20;
        translateX = 140;
        opacity = 0.65;
        blur = 1;
        zIndex = 2;
        break;

      case 2:
        scale = 0.65;
        rotate = -35;
        translateX = 260;
        opacity = 0.25;
        blur = 2;
        zIndex = 1;
        break;

      default:
        opacity = 0;
        scale = 0.5;
        translateX = offset * 280;
        zIndex = 0;
    }

    return {
      scale,
      rotate,
      translateX,
      opacity,
      blur,
      zIndex,
      active: offset === 0,
    };
  };

  return {
    active,

    next,
    prev,
    goTo,

    getTransform,

    handlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,

      onMouseEnter,
      onMouseLeave,
    },
  };
}
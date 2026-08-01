export const COVERFLOW = {
  perspective: 1800,

  maxRotation: 32,

  maxTranslateZ: 120,

  minScale: 0.72,

  maxScale: 1,

  minOpacity: 0.25,

  maxOpacity: 1,

  maxBlur: 3,

  transition:
    'transform .75s cubic-bezier(.22,.61,.36,1), opacity .55s, filter .55s',
};

export function calculateCoverflow(
  emblaApi,
  slideCount
) {
  if (!emblaApi) return [];

  const engine = emblaApi.internalEngine();

  const scrollProgress = emblaApi.scrollProgress();

  const snaps = emblaApi.scrollSnapList();

  const loopPoints = engine.slideLooper.loopPoints;

  const styles = [];

  snaps.forEach((snap, index) => {
    let diff = snap - scrollProgress;

    if (engine.options.loop) {
      loopPoints.forEach((loopItem) => {
        const target = loopItem.target();

        if (loopItem.index === index && target !== 0) {
          diff =
            target < 0
              ? snap - (1 + scrollProgress)
              : snap + (1 - scrollProgress);
        }
      });
    }

    const abs = Math.abs(diff);

    const rotate =
      -diff * COVERFLOW.maxRotation;

    const scale = Math.max(
      COVERFLOW.minScale,
      COVERFLOW.maxScale - abs * 0.35
    );

    const opacity = Math.max(
      COVERFLOW.minOpacity,
      COVERFLOW.maxOpacity - abs * 0.8
    );

    const blur =
      Math.min(abs * 3, COVERFLOW.maxBlur);

    const translateZ =
      Math.max(
        0,
        COVERFLOW.maxTranslateZ -
          abs * COVERFLOW.maxTranslateZ
      );

    const brightness =
      1 - abs * .18;

    styles[index] = {
      opacity,

      filter: `
        blur(${blur}px)
        brightness(${brightness})
      `,

      transform: `
        perspective(${COVERFLOW.perspective}px)
        translateZ(${translateZ}px)
        rotateY(${rotate}deg)
        scale(${scale})
      `,

      transition: COVERFLOW.transition,

      transformStyle: 'preserve-3d',

      zIndex: Math.round(1000 - abs * 100),
    };
  });

  return styles;
}
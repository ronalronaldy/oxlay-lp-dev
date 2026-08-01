/* ==========================================================
   OXLAY Coverflow Engine
   Part 1
   ----------------------------------------------------------
   Config
   Engine Factory
   Internal State
========================================================== */

/* ==========================================================
    DEFAULT CONFIG
========================================================== */

export const DEFAULT_OPTIONS = {
  loop: true,

  autoplay: true,

  autoplayDelay: 3500,

  pauseOnHover: true,

  perspective: 1800,

  maxRotate: 35,

  maxTranslateX: 220,

  maxTranslateZ: 120,

  minScale: 0.72,

  maxScale: 1,

  minOpacity: 0.25,

  maxOpacity: 1,

  maxBlur: 3,

  shadowBlur: 60,

  transition: 'transform .65s cubic-bezier(.22,.61,.36,1),opacity .45s,filter .45s',
};

/* ==========================================================
    INTERNAL STATE
========================================================== */

function createState() {
  return {
    emblaApi: null,

    engine: null,

    options: null,

    slides: [],

    slideNodes: [],

    loopPoints: [],

    rafId: null,

    autoplayId: null,

    isPlaying: false,

    isHover: false,

    isDestroyed: false,

    progress: 0,

    selectedIndex: 0,

    previousProgress: 0,

    previousIndex: 0,
  };
}

/* ==========================================================
    ENGINE FACTORY
========================================================== */

export function createCoverflow(emblaApi, slideNodes, options = {}) {
  const state = createState();

  state.emblaApi = emblaApi;

  state.options = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  if (!emblaApi) {
    console.warn('[Coverflow] Embla belum tersedia.');

    return null;
  }

  state.engine = emblaApi.internalEngine();

  state.slideNodes = slideNodes ?? emblaApi.slideNodes();

  state.slides = emblaApi.slideNodes();

  state.loopPoints = state.engine.slideLooper.loopPoints;

  /* =======================================
      Getter
  ======================================= */

  const getEmbla = () => state.emblaApi;

  const getEngine = () => state.engine;

  const getSlides = () => state.slides;

  const getSlideNodes = () => state.slideNodes;

  const getLoopPoints = () => state.loopPoints;

  const getOptions = () => state.options;

  const getProgress = () => state.emblaApi.scrollProgress();

  const getSelected = () => state.emblaApi.selectedScrollSnap();

  /* =======================================
      Setter
  ======================================= */

  const setHover = (value) => {
    state.isHover = value;
  };

  const setPlaying = (value) => {
    state.isPlaying = value;
  };

  /* =======================================
      Public API
  ======================================= */

  return {
    state,

    getEmbla,

    getEngine,

    getSlides,

    getSlideNodes,

    getLoopPoints,

    getOptions,

    getProgress,

    getSelected,

    setHover,

    setPlaying,
  };
}

const easeInOut = (t: number): number => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const scrollToTop = (duration: number = 300): void => {
  const startTime: number = performance.now();
  const startPosition: number = scrollY;

  const animateScroll = (currentTime: number) => {
    const elapsedTime: number = currentTime - startTime;
    const progress: number = Math.min(1, elapsedTime / duration);
    const easeProgress: number = easeInOut(progress);

    const newPosition: number = startPosition * (1 - easeProgress);

    scrollTo(0, Math.max(newPosition, 0));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

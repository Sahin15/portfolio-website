import { motion, useScroll, useSpring } from 'framer-motion';

const MotionDiv = motion.div;

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  // Animates only `transform: scaleX`, which is GPU-composited and avoids layout work.
  return (
    <MotionDiv
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-cyan-300"
      style={{ scaleX }}
    />
  );
}

export default ScrollProgress;

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

function GlassCard({ className, children, tilt = false }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e) => {
    if (!ref.current || !tilt) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    x.set(0);
    y.set(0);
  };

  const Component = tilt ? motion.div : 'div';
  const animationProps = tilt 
    ? {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: { rotateX, rotateY, transformStyle: 'preserve-3d' },
      }
    : {};

  return (
    <Component
      ref={ref}
      {...animationProps}
      className={cn(
        'rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,43,0.8),rgba(9,13,26,0.82))] p-6 shadow-[0_30px_80px_rgba(4,8,20,0.5)] backdrop-blur-xl',
        tilt && 'transition-shadow hover:shadow-[0_45px_100px_rgba(0,0,0,0.6)] duration-500',
        className,
      )}
    >
      {tilt ? (
        <div style={{ transform: 'translateZ(30px)' }} className="h-full w-full">
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
}

export default GlassCard;

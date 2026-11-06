import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

const MotionLink = motion.create(Link);

const styles = {
  primary:
    'bg-[linear-gradient(135deg,rgba(72,188,255,0.95),rgba(122,102,255,0.92))] text-slate-950 shadow-[0_18px_50px_rgba(88,153,255,0.28)] hover:shadow-[0_26px_60px_rgba(88,153,255,0.4)]',
  secondary:
    'border border-white/12 bg-white/6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-white/20 hover:bg-white/10',
};

function Button({ href, to, variant = 'primary', className, children, ...props }) {
  const classes = cn(
    'group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition-colors transition-shadow duration-300',
    styles[variant],
    className,
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps} {...props}>
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}

export default Button;

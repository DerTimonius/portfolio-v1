import { motion } from 'framer-motion';

interface MotionProps extends React.PropsWithChildren {
  className?: string;
  delay?: number;
  duration?: number;
  initialScale?: number;
  translateX?: number;
  translateY?: number;
}

export default function Motion({
  children,
  delay = 0,
  duration = 0.6,
  initialScale = 0.7,
  className,
}: MotionProps) {
  return (
    <motion.div
      className={className}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: initialScale }}
      transition={{
        ease: 'easeInOut',
        duration,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

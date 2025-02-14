import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={boxVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right"; // Add direction prop
}

export const ScrollReveal2: React.FC<ScrollRevealProps> = ({
  children,
  className,
  direction = "left",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
interface ScrollCounterProps {
  start: number;
  end: number;
  duration: number;
  className?: string;
}

interface ScrollCounterProps {
  start: number;
  end: number;
  duration: number;
  className?: string;
}

export const ScrollCounter: React.FC<ScrollCounterProps> = ({ start, end, duration, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });
  const [isCounting, setIsCounting] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setIsCounting(true);
    } else {
      controls.start('hidden');
      setIsCounting(false);
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className={className}>
      {isCounting && (
        <CountUp start={start} end={end} duration={duration}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} className="text-[20px] text-black font-inter font-semibold" />
            </div>
          )}
        </CountUp>
      )}
    </div>
  );
};


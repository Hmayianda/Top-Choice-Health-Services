import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function FadeUp({ children, delay = 0, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

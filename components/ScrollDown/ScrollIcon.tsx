"use client";
import styles from "./ScrollDown.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollDown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: false,
  });

  return (
    <motion.div
      className="py-12"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <span className={styles["mouse-btn"]}>
        <span className={styles["mouse-scroll"]}></span>
      </span>
    </motion.div>
  );
};

export default ScrollDown;

"use client";
import styles from "./ScrollDown.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollDown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1 }}
      animate={{ opacity: isInView ? 0 : 1 }}
      transition={{ duration: 1 }}
    >
      <span className={styles["mouse-btn"]}>
        <span className={styles["mouse-scroll"]}></span>
      </span>
    </motion.div>
  );
};

export default ScrollDown;

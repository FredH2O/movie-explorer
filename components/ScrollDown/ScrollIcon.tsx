import styles from "./ScrollDown.module.css";

const ScrollDown = () => {
  return (
    <div className={styles.container_mouse}>
      <span className={styles["mouse-btn"]}>
        <span className={styles["mouse-scroll"]}></span>
      </span>
    </div>
  );
};

export default ScrollDown;

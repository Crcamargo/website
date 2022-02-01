import styles from "./Switch.module.css";

const Switch = ({ off, on }) => (
  <div className={styles.wrapper}>
    <input
      className={styles.checkbox}
      id="checkbox"
      type="checkbox"
      onChange={(e) => (e.target.checked ? on() : off())}
    />
    <label className={styles.label} htmlFor="checkbox" />
  </div>
);

export default Switch;

import styles from "./Switch.module.css";

const Switch = ({ checked, toggleOn, toggleOff }) => (
  <div className={styles.wrapper}>
    <input
      className={styles.checkbox}
      id="checkbox"
      type="checkbox"
      onChange={(e) => (e.target.checked ? toggleOn() : toggleOff())}
      checked={checked}
    />
    <label className={styles.label} htmlFor="checkbox" />
  </div>
);

export default Switch;

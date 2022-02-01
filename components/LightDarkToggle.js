import { Sun, Moon } from "react-feather";
import styles from "./LightDarkToggle.module.css"
import Switch from "./Switch";

const LightDarkToggle = ({ toggleDark, toggleLight }) => (
  <div className={styles.container}>
    <Sun className={styles.icon}/>
    <Switch on={toggleDark} off={toggleLight} />
    <Moon className={styles.icon}/>
  </div>
);

export default LightDarkToggle;
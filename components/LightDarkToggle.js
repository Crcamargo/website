import { Sun, Moon } from "react-feather";
import styles from "./LightDarkToggle.module.css";
import Switch from "./Switch";
import { useState } from "react";

const LightDarkToggle = () => {
  const [checked, setChecked] = useState(true);
  const setDarkTheme = () => {
    document.documentElement.style.setProperty("--color", "#fafafa");
    document.documentElement.style.setProperty("--background-color", "#0d1117");
    document.documentElement.style.setProperty("--accent-color", "#58a6ff");
    setChecked(true);
  };
  const setLightTheme = () => {
    document.documentElement.style.setProperty("--color", "#000000");
    document.documentElement.style.setProperty("--background-color", "#fafafa");
    document.documentElement.style.setProperty("--accent-color", "#0070f3");
    setChecked(false);
  };

  return (
    <div className={styles.container}>
      <Sun className={styles.icon} />
      <Switch
        checked={checked}
        toggleOn={setDarkTheme}
        toggleOff={setLightTheme}
      />
      <Moon className={styles.icon} />
    </div>
  );
};

export default LightDarkToggle;

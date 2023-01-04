import { Sun, Moon, Grid, Home, Book, Code } from "react-feather";
import styles from "./LightDarkToggle.module.css";
import Switch from "./Switch";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const router = useRouter();
  const isAppPage = router.pathname.toLowerCase() === "/apps";

  const buttonLink = isAppPage ? "/" : "/apps";
  const buttonText = isAppPage ? "Home" : "Applications";
  const buttonIcon = isAppPage ? <Home /> : <Grid />;

  return (
    <div className={styles.container}>
      <Link href={buttonLink} passHref>
        <div className={styles.appIconContainer}>
          {buttonIcon}
          <span className={styles.appText}>{buttonText}</span>
        </div>
      </Link>
      <Link href={buttonLink} passHref>
        <div className={styles.appIcon1Container}>
          <Book />
          <span className={styles.appText}>Personal Blog</span>
        </div>
      </Link>
      <Link href={buttonLink} passHref>
        <div className={styles.appIcon2Container}>
          <Code />
          <span className={styles.appText}>Tech Blog</span>
        </div>
      </Link>
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

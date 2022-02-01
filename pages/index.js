import Head from "next/head";
import styles from "../styles/index.module.css";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Hello from "../components/Hello";
import LightDarkToggle from "../components/LightDarkToggle";

export default function Home() {
  const setDarkTheme = () => {
    document.documentElement.style.setProperty("--color", "#fafafa");
    document.documentElement.style.setProperty("--background-color", "#0d1117");
    document.documentElement.style.setProperty("--accent-color", "#58a6ff");
  };
  const setLightTheme = () => {
    document.documentElement.style.setProperty("--color", "#000000");
    document.documentElement.style.setProperty("--background-color", "#fafafa");
    document.documentElement.style.setProperty("--accent-color", "#0070f3");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cristian Camargo</title>
        <meta
          name="description"
          content="Personal website for Cristian Camargo to showcase software engineering background"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LightDarkToggle toggleDark={setDarkTheme} toggleLight={setLightTheme} />
      <Hello />
      <Resume />
      <Footer />
    </div>
  );
}

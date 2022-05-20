import Head from "next/head";
import styles from "../styles/index.module.css";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Hello from "../components/Hello";
import LightDarkToggle from "../components/LightDarkToggle";

export default function Home() {
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
      <LightDarkToggle />
      <Hello />
      <Resume />
      <Footer />
    </div>
  );
}

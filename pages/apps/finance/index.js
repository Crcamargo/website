import Head from "next/head";
import styles from "../../../styles/index.module.css";
import LightDarkToggle from "../../../components/LightDarkToggle";
import Finance from "../../../components/apps/finance/Finance";

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
      <Finance />
    </div>
  );
}

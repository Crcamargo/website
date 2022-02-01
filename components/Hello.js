import Image from "next/image";
import styles from "./Hello.module.css";
import Me from "../public/shaka.jpg";
import Contacts from "./Contacts";

const IMAGE_SIZE = 200;

const Hello = () => (
  <div className={styles.main}>
    <div className={styles.container}>
      <p className={styles.line}>
        Hello! My name is <b>Cristian Camargo</b> 👋🏽
        <br />
      </p>
      <div className={styles.about}>
        <Image
          className={styles.pic}
          src={Me}
          alt="Picture of Cristian Camargo"
          height={IMAGE_SIZE}
          width={IMAGE_SIZE}
        />
        <div className={styles.description}>
          I am a software engineer specializing in building back-end,
          multi-cloud, microservices. Currently, I work on building large,
          complex, applications that serve thousands of enterprise customers.
          🧑🏽‍💻
        </div>
      </div>
      <Contacts />
    </div>
  </div>
);

export default Hello;

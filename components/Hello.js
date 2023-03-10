import Image from "next/image";
import styles from "./Hello.module.css";
import Me from "../public/linkedin.jpeg";
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
          I am a Machine Learning Engineer, focused on building a cost-efficient
          and scalable ML Platform. I collaborate with Data Scientists and
          Analysts across all domains to impact decision-making and predictions
          on billions of events 🧑🏽‍💻.
        </div>
      </div>
      <Contacts />
    </div>
  </div>
);

export default Hello;

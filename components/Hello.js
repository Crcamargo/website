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
          I am an experienced software engineer specializing in building
          back-end, multi-cloud, microservices.
          <p>
            Currently, I work as a ML Engineer focusing on deploying and
            maintaining machine learning models in production that serve
            millions of users 🧑🏽‍💻.
          </p>
          {/* <p>
            Currently, I work on building large, complex, applications that
            serve thousands of enterprise customers.
          </p> */}
        </div>
      </div>
      <Contacts />
    </div>
  </div>
);

export default Hello;

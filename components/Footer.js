import styles from "./Footer.module.css"
import Vercel from "./Vercel";

const Footer = () => (
  <div className={styles.container}>
    <a
      className={styles.vercel}
      target="_blank"
      rel="noreferrer"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    >
      Powered by{" "}
      <div className={styles.logo}>
        <Vercel width={72} height={16}/>
      </div>
    </a>
  </div>
);

export default Footer;

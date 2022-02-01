import styles from "./Contacts.module.css"
import { GitHub, Linkedin, Mail } from "react-feather";

const ICON_SIZE = 30;

const Contacts = () => (
  <div className={styles.container}>
    <a
      target="_blank"
      rel="noreferrer"
      href="mailto:crcamargo@protonmail.com"
      aria-label="email"
    >
      <Mail size={ICON_SIZE} className={styles.icon}/>
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/crcamargo"
      aria-label="linkedin"
    >
      <Linkedin size={ICON_SIZE} className={styles.icon} />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/Crcamargo"
      aria-label="github"
    >
      <GitHub size={ICON_SIZE} className={styles.icon} />
    </a>
  </div>
);

export default Contacts;

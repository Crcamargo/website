import styles from "./ResumeSection.module.css";

const ResumeSection = ({ name, children }) => (
  <div className={styles.container}>
    <div className={styles.name}>{name}</div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default ResumeSection;

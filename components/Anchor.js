import styles from "./Anchor.module.css"

const Anchor = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className={styles.anchor}>
    {children}
  </a>
);

export default Anchor;

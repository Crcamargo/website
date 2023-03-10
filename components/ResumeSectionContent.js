import styles from "./ResumeSectionContent.module.css";
import Image from "next/image";

const LOGO_SIZE = 70;
const ResumeSectionContent = ({
  title,
  title2,
  date,
  img,
  children,
  skills,
  imgWidth,
  includeLeftIndent,
}) => (
  <div className={styles.content}>
    <div className={styles.header}>
      {img ? (
        <div className={styles.imageWrapper}>
          <Image
            alt="section image"
            src={img}
            width={imgWidth ? imgWidth : LOGO_SIZE}
            height={LOGO_SIZE}
            style={{ borderRadius: "10px" }}
          />
        </div>
      ) : null}
      <div>
        <div className={styles.title}>
          {title}
          {title2 ? (
            <span>
              <br />
              {title2}
            </span>
          ) : null}
        </div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
    <div className={includeLeftIndent ? styles.detailsXl : styles.details}>
      {children}
      {skills ? (
        <div className={styles.skills}>
          {skills.map((skill, i) => (
            <div className={styles.skill} key={i}>
              {skill}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  </div>
);

export default ResumeSectionContent;

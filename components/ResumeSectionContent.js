import styles from "./ResumeSectionContent.module.css";
import Image from "next/image";

const LOGO_SIZE = 75;
const ResumeSectionContent = ({
  title,
  title2,
  date,
  img,
  children,
  skills,
  imgWidth,
}) => (
  <div className={styles.content}>
    <div className={styles.header}>
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
      {img ? (
        <Image
          alt="section image"
          src={img}
          width={imgWidth ? imgWidth : LOGO_SIZE}
          height={LOGO_SIZE}
        />
      ) : null}
    </div>
    <div>
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

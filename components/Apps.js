import Image from "next/image";
import Link from "next/link";
import styles from "./Apps.module.css";

const _apps = [
  {
    link: "link",
    image: "https://s-media-cache-ak0.pinimg.com/originals/45/2c/e7/452ce7c3ce3034806cf0fc781173507e.gif",
    name: "name",
  }
];

const Apps = () => (
  <div className={styles.container}>
    <div className={styles.apps}>
      {_apps.map((app, i) => (
        <Link key={i} href={app.link} passHref>
          <div className={styles.card}>
            <Image className={styles.appImage} src={app.image} height={220} width={290} alt={app.name}/>
            <div className={styles.appName}>{app.name}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Apps;

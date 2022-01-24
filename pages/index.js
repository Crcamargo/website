import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Me from "../public/photo-small.jpg";
import styled from "styled-components";
import Resume from "../components/Resume";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Footer from "../components/Footer";
import { GitHub, Linkedin, Mail } from "react-feather";

const lightTheme = {
  color: "black",
  backgroundColor: "#fafafa",
  accentColor: "#0070f3",
};
const darkTheme = {
  color: "#fafafa",
  backgroundColor: "#0d1117",
  accentColor: "#58a6ff",
};

const Container = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Contacts = styled.div`
  margin-top: 4rem;
  margin-left: 2rem;
`;

const MailIcon = styled(Mail)`
  color: ${(props) => props.theme.color};
  margin-right: 2rem;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

const LinkedinIcon = styled(Linkedin)`
  color: ${(props) => props.theme.color};
  margin-right: 2rem;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

const GithubIcon = styled(GitHub)`
  color: ${(props) => props.theme.color};
  margin-right: 2rem;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

const ICON_SIZE = 30;

export default function Home() {
  const [theme, setTheme] = useState(darkTheme);
  const setDarkTheme = () => setTheme(darkTheme);
  const setLightTheme = () => setTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Head>
          <title>Cristian Camargo</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <button onClick={setDarkTheme}>Toggle Dark</button>
          <button onClick={setLightTheme}>Toggle Light</button>
        <main className={styles.main}>
          <div className={styles.helloContainer}>
            <p className={styles.helloLine}>
              Hello! My name is <b>Cristian Camargo</b> 👋🏽
              <br />
            </p>
            <div className={styles.about}>
              <Image
                className={styles.profile}
                src={Me}
                alt="Picture of Cristian Camargo"
                height={500}
                width={500}
              />
              <div className={styles.description}>
                I am a software engineer specializing in building back-end,
                multi-cloud, microservices. Currently, I work on building large,
                complex, applications that serve thousands of enterprise
                customers. 🧑🏽‍💻
              </div>
            </div>
            <Contacts>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:cristian.dean22@gmail.com"
              >
                <MailIcon size={ICON_SIZE} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/crcamargo"
              >
                <LinkedinIcon size={ICON_SIZE} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Crcamargo"
              >
                <GithubIcon size={ICON_SIZE} />
              </a>
            </Contacts>
          </div>
        </main>
        <Resume />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

import Head from "next/head";
import styled from "styled-components";
import Resume from "../components/Resume";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Footer from "../components/Footer";
import Hello from "../components/Hello";

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

export default function Home() {
  const [theme, setTheme] = useState(darkTheme);
  const setDarkTheme = () => setTheme(darkTheme);
  const setLightTheme = () => setTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Head>
          <title>Cristian Camargo</title>
          <meta
            name="description"
            content="Personal website for Cristian Camargo to showcase software engineering background"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <button onClick={setDarkTheme}>Toggle Dark</button>
        <button onClick={setLightTheme}>Toggle Light</button>
        <Hello />
        <Resume />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

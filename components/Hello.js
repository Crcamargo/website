import Image from "next/image";
import styled from "styled-components";
import Me from "../public/shaka.jpg";
import Contacts from "./Contacts";
import { MOBILE } from "./Constants";

const IMAGE_SIZE = 200;
const Main = styled.div`
  min-height: 100vh;
  padding: 0rem 1rem 0 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${MOBILE}) {
    justify-content: space-between;
    margin-bottom: 4rem;
  }
`;
const HelloContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HelloLine = styled.p`
  font-size: 2rem;
  margin-bottom: 3rem;
`;
const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const ProfileImage = styled(Image)`
  border-radius: 50%;
`;
const Description = styled.div`
  line-height: 1.5;
  font-size: 1.5rem;
  text-align: start;
  margin-left: 3rem;
  max-width: 600px;
  @media (max-width: ${MOBILE}) {
    margin: 2rem 0 0 0;
    text-align: center;
  }
`;

const Hello = () => (
  <Main>
    <HelloContainer>
      <HelloLine>
        Hello! My name is <b>Cristian Camargo</b> 👋🏽
        <br />
      </HelloLine>
      <About>
        <ProfileImage
          src={Me}
          alt="Picture of Cristian Camargo"
          height={IMAGE_SIZE}
          width={IMAGE_SIZE}
        />
        <Description>
          I am a software engineer specializing in building back-end,
          multi-cloud, microservices. Currently, I work on building large,
          complex, applications that serve thousands of enterprise customers.
          🧑🏽‍💻
        </Description>
      </About>
      <Contacts />
    </HelloContainer>
  </Main>
);

export default Hello;

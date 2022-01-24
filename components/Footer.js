import styled from "styled-components";
import Vercel from "./Vercel";

const FooterContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  height: 1em;
  margin-left: 0.5rem;
`;

const AWithLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color};
  flex-grow: 1;
  text-decoration: none;
`;

const Footer = () => (
  <FooterContainer>
    <AWithLogo
      target="_blank"
      rel="noreferrer"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    >
      Powered by{" "}
      <Logo>
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        <Vercel width={72} height={16}/>
      </Logo>
    </AWithLogo>
  </FooterContainer>
);

export default Footer;

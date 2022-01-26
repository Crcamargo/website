import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather";
import { MOBILE } from "./Constants";

const ICON_SIZE = 30;
const ContactsContainer = styled.div`
  margin-top: 4rem;
  margin-left: 2rem;
  @media (max-width: ${MOBILE}) {
    margin: 2rem 0 0 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
const MailIcon = styled(Mail)`
  color: ${(props) => props.theme.color};
  margin-right: 2rem;
  @media (max-width: ${MOBILE}) {
    margin: 0;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;
const LinkedinIcon = styled(Linkedin)`
  color: ${(props) => props.theme.color};
  margin-right: 2rem;
  @media (max-width: ${MOBILE}) {
    margin: 0;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;
const GithubIcon = styled(GitHub)`
  color: ${(props) => props.theme.color};
  margin-right: 2rem;
  @media (max-width: ${MOBILE}) {
    margin: 0;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

const Contacts = () => (
  <ContactsContainer>
    <a
      target="_blank"
      rel="noreferrer"
      href="mailto:cristian.dean22@gmail.com"
      aria-label="email"
    >
      <MailIcon size={ICON_SIZE} />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/crcamargo"
      aria-label="linkedin"
    >
      <LinkedinIcon size={ICON_SIZE} />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/Crcamargo"
      aria-label="github"
    >
      <GithubIcon size={ICON_SIZE} />
    </a>
  </ContactsContainer>
);

export default Contacts;

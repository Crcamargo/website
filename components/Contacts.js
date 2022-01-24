import styled from "styled-components";
import { GitHub, Linkedin, Mail } from "react-feather";

const ICON_SIZE = 30;
const ContactsContainer = styled.div`
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

const Contacts = () => (
  <ContactsContainer>
    <a target="_blank" rel="noreferrer" href="mailto:cristian.dean22@gmail.com">
      <MailIcon size={ICON_SIZE} />
    </a>
    <a
      target="_blank"
      rel="noreferrer"
      href="https://www.linkedin.com/in/crcamargo"
    >
      <LinkedinIcon size={ICON_SIZE} />
    </a>
    <a target="_blank" rel="noreferrer" href="https://github.com/Crcamargo">
      <GithubIcon size={ICON_SIZE} />
    </a>
  </ContactsContainer>
);

export default Contacts;

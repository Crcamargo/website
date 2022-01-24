import { Sun, Moon } from "react-feather";
import styled from "styled-components";
import Switch from "./Switch";

const SwitchContainer = styled.div`
  padding-right: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const SunIcon = styled(Sun)`
  color: ${(props) => props.theme.color};
  margin-right: 1rem;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;
const MoonIcon = styled(Moon)`
  color: ${(props) => props.theme.color};
  margin-left: .9rem;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

const LightDarkToggle = ({ toggleDark, toggleLight }) => (
  <SwitchContainer>
    <SunIcon />
    <Switch on={toggleDark} off={toggleLight} />
    <MoonIcon />
  </SwitchContainer>
);

export default LightDarkToggle;
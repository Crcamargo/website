import styled from "styled-components";

const A = styled.a`
  color: ${(props) => props.theme.accentColor};
`;

const Anchor = ({ href, children }) => (
  <A href={href} target="_blank" rel="noreferrer">
    {children}
  </A>
);

export default Anchor;

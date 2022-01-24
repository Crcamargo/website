import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4em;
`;
const SectionName = styled.div`
  flex-grow: 1;
  display: flex;
  letter-spacing: 0.1rem;
  color: ${props => props.theme.accentColor};
  justify-content: center;
  font-size: 1.5rem;
`;
const ContentContainer = styled.div`
  width: 66%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`

const ResumeSection = ({ name, children }) => (
  <SectionContainer>
    <SectionName>{name}</SectionName>
    <ContentContainer>
      {children}
    </ContentContainer>
  </SectionContainer>
);

export default ResumeSection;

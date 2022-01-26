import styled from "styled-components";
import Image from "next/image";

const LOGO_SIZE = 75;
const SectionContent = styled.div`
  margin-bottom: 4rem;
`;
const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
const ContentTitleContainer = styled.div``;
const ContentTitle = styled.div`
  margin-right: 2rem;
`;
const ContentDate = styled.div`
  font-weight: 200;
  font-size: 1rem;
`;
const ContentImg = styled(Image)``;
const Content = styled.div``;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
`;
const Skill = styled.div`
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.accentColor};
  color: ${props => props.theme.accentColor};
  margin-right: 1rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const ResumeSectionContent = ({
  title,
  title2,
  date,
  img,
  children,
  skills,
  imgWidth,
}) => (
  <SectionContent>
    <ContentHeader>
      <ContentTitleContainer>
        <ContentTitle>
          {title}
          {title2 ? (
            <span>
              <br />
              {title2}
            </span>
          ) : null}
        </ContentTitle>
        <ContentDate>{date}</ContentDate>
      </ContentTitleContainer>
      {img ? (
        <ContentImg
          src={img}
          width={imgWidth ? imgWidth : LOGO_SIZE}
          height={LOGO_SIZE}
        />
      ) : null}
    </ContentHeader>
    <Content>
      {children}
      {skills ? (
        <Skills>
          {skills.map((skill, i) => (
            <Skill key={i}>{skill}</Skill>
          ))}
        </Skills>
      ) : null}
    </Content>
  </SectionContent>
);

export default ResumeSectionContent;

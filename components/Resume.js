import ResumeSection from "../components/ResumeSection";
import ResumeSectionContent from "../components/ResumeSectionContent";
import UCSD from "../public/ucsd.png";
import styled from "styled-components";
import Anchor from "./Anchor";
import { MOBILE } from "./Constants";

const ListElement = styled.li`
  margin-bottom: 1rem;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem 0 4rem;
  @media (max-width: ${MOBILE}) {
    margin: 0 1rem 0 1rem;
  }
`;

const Resume = () => (
  <ResumeContainer>
    <ResumeSection name="Education">
      <ResumeSectionContent
        title={"B.S. in Mathematics and Computer Science"}
        title2={"University of California San Diego"}
        date="September 2014 - June 2018"
        img={UCSD}
      />
    </ResumeSection>
    <ResumeSection name="Experience">
      <ResumeSectionContent
        title="AI/ML Software Engineer - Seismic"
        date="September 2018 - Present"
        skills={[
          ".NET",
          "Python",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Azure",
          "GCP",
          "AWS",
          "PostgreSQL",
          "AI/ML",
        ]}
      >
        <ul>
          <ListElement>
            Worked with the Data and Analytics Team to develop streaming and
            batch processing data systems in .NET that wrote data to MSSQL and
            Snowflake Data Warehouse to make data available for machine learning
            and analytics.
          </ListElement>
          <ListElement>
            Productionized data scientists’ work by: refactoring Python code
            into deployable packages; integrating existing Kubernetes hosted
            docker containers into fully automated CI/CD Jenkins pipelines; and
            establishing security, logging, and alerting best practices in the
            AI/ML teams microservices.
          </ListElement>
          <ListElement>
            Created Seismic’s internal A/B testing experiment framework using
            .NET REST APIs and PostgreSQL, and was responsible for Seismic’s
            first production homepage A/B testing.
          </ListElement>
          <ListElement>
            Built Seismic&apos;s ML training infrastructure and was responsible
            for the backend services that supports{" "}
            <Anchor href="https://seismic.com/company/blog/summer-2021-release-ai-guided-sales/">
              Seismic Aura - Seismic&apos;s AI Engine
            </Anchor>
          </ListElement>
        </ul>
      </ResumeSectionContent>
      <ResumeSectionContent
        title="Devops Engineer Intern - Seismic"
        date="June 2018 - September 2018"
        skills={[
          "React",
          "Node.js",
          "Jenkins",
          "Ansible",
          "Terraform",
          "Robot Framework",
        ]}
      >
        <ul>
          <ListElement>
            Built a full stack web application in React and Node.js that acted
            as an internal DevOps dashboard. The dashboard provided insights,
            such as lead time for customer bugs and a high level overview of
            Jenkins pipeline health.
          </ListElement>
          <ListElement>
            Assisted the QA team in building out a new testing automation
            framework written in Robot that was fully integrated into our CICD
            Jenkins pipelines.
          </ListElement>
        </ul>
      </ResumeSectionContent>
      <ResumeSectionContent
        title="QA Engineer Intern - BrightSign"
        date="June 2017 - September 2017"
        skills={["C++", "QA"]}
      >
        <ul>
          <ListElement>
            Designed and created a windows program in C++ to send and receive
            commands to an HDMI protocol analyzer to automate video testing.
          </ListElement>
          <ListElement>
            Oversaw and documented HDCP compliance testing for BrightSign
            players.
          </ListElement>
        </ul>
      </ResumeSectionContent>
    </ResumeSection>
    <ResumeSection name="Projects">
      <ResumeSectionContent title={"Smart Park Disney"}>
        <div>
          <Anchor href="https://github.com/Crcamargo/SmartParkDisney/blob/master/app/src/main/java/com/themparksdetermined/smartparkdisney/View/SmartPlanFragment.java">
            Github
          </Anchor>
          <ul>
            <ListElement>
              Individually developed an Android app, using Java, that
              streamlines wait times and park info for Disneyland.
            </ListElement>
            <ListElement>
              Used Firebase and Google Directions API to design a Smart Plan
              feature. The Smart Plan feature allows a user to select their
              favorite rides and then generates an optimized plan using fast
              pass, ride wait time, average wait time, and location data.
            </ListElement>
          </ul>
        </div>
      </ResumeSectionContent>
      <ResumeSectionContent title={"VRcane"}>
        <div>
          <Anchor href="https://youtu.be/1d2FRqKNIU0">Project Demo</Anchor>
          <ul>
            <ListElement>
              Developed a multiplayer virtual reality first person game for the
              Google Daydream Headset.
            </ListElement>
            <ListElement>
              Worked in a team as algorithm specialist to design functions and
              optimize algorithms to have VRcane running properly and
              efficiently.
            </ListElement>
          </ul>
        </div>
      </ResumeSectionContent>
      <ResumeSectionContent title={"Treacherous Adventure"}>
        <div>
          <Anchor href="https://treacherous-adventure.web.app/">
            https://treacherous-adventure.web.app/
          </Anchor>
          <ul>
            <ListElement>
              Built and launched the official Treacherouse Adventure website!
            </ListElement>
            <ListElement>
              Used HTML, CSS, Javascript, and Bootstrap front-end framework.
            </ListElement>
          </ul>
        </div>
      </ResumeSectionContent>
    </ResumeSection>
  </ResumeContainer>
);

export default Resume;

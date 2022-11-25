import ResumeSection from "../components/ResumeSection";
import ResumeSectionContent from "../components/ResumeSectionContent";
import UCSD from "../public/ucsd.png";
import styles from "./Resume.module.css";
import Anchor from "./Anchor";

const Resume = () => (
  <div className={styles.container}>
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
        title="Senior Software Engineer - Machine Learning - Wise"
        date="January 2023 - Present"
      ></ResumeSectionContent>
      <ResumeSectionContent
        title="Software Engineer - Seismic"
        date="September 2018 - September 2022"
        includeLeftIndent={true}
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
          "Redis",
          "Kafka",
          "AI/ML",
        ]}
      >
        <br />
        <div className={styles.teamTitle}>External Data Team</div>
        <ul>
          <li>
            Helped build the next external data attribution infrastructure,
            which turned a batch job into an event-driven microservice-based
            system. Improved attribution time from 24 hours to near-real-time.
          </li>
        </ul>
        <div className={styles.teamTitle}>AI/ML Team</div>
        <ul>
          <li>
            Built Seismic&apos;s ML training infrastructure in Python and
            AzureML and was responsible for the backend services that support{" "}
            <Anchor href="https://seismic.com/company/blog/summer-2021-release-ai-guided-sales/">
              Seismic Aura - Seismic&apos;s AI Engine
            </Anchor>
          </li>
          <li>
            Helped rebuild Seismic&apos;s homepage content recommendation system
            using .NET and Redis. This service was 20x faster than the old one
            and drastically improved homepage loading times.
          </li>
          <li>
            Created Seismic&apos;s internal A/B testing experiment framework in
            .NET using PostgreSQL and managed Seismic&apos;s first production
            homepage A/B testing.
          </li>
          <li>
            Productionized data scientists&apos; work by: refactoring Python
            code into deployable packages; integrating existing Kubernetes
            hosted docker containers into fully automated CI/CD Jenkins
            pipelines; and establishing security, logging, and alerting best
            practices in the AI/ML teams microservices.
          </li>
          <li>
            Worked with the Data and Analytics Team to develop streaming and
            batch processing data systems in .NET that wrote data to MSSQL and
            Snowflake Data Warehouse to make data available for machine learning
            and analytics.
          </li>
        </ul>
        <div className={styles.teamTitle}>CRM Services Team</div>
        <ul>
          <li>
            Worked on the CRM Services team to refactor Seismic&apos;s legacy
            and monolithic, Predictive Content application into a microservice
            that was 10x faster than the original.
          </li>
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
          <li>
            Built a full stack web application in React and Node.js that acted
            as an internal DevOps dashboard. The dashboard provided insights,
            such as lead time for customer bugs and a high level overview of
            Jenkins pipeline health.
          </li>
          <li>
            Assisted the QA team in building out a new testing automation
            framework written in Robot that was fully integrated into our CICD
            Jenkins pipelines.
          </li>
        </ul>
      </ResumeSectionContent>
      <ResumeSectionContent
        title="QA Engineer Intern - BrightSign"
        date="June 2017 - September 2017"
        skills={["C++", "QA"]}
      >
        <ul>
          <li>
            Designed and created a windows program in C++ to send and receive
            commands to an HDMI protocol analyzer to automate video testing.
          </li>
          <li>
            Oversaw and documented HDCP compliance testing for BrightSign
            players.
          </li>
        </ul>
      </ResumeSectionContent>
    </ResumeSection>
    <ResumeSection name="Projects">
      <ResumeSectionContent
        title={"FellowshipIt"}
        skills={["Python", "SQLAlchemy", "PostgreSQL", "React Native"]}
      >
        <div>
          <div>
            Download The App! <Anchor>IOS</Anchor> | <Anchor>Android</Anchor>
          </div>
          <ul>
            <li>
              Built a mobile application that allows Christian communities to
              stay better connected.
            </li>
          </ul>
        </div>
      </ResumeSectionContent>
      <ResumeSectionContent
        title={"Personal Website"}
        skills={["Next.js", "Javascript", "Vercel"]}
      >
        <div>
          <Anchor href="https://cristiancamargo.me/">This Website!</Anchor>
          <ul>
            <li>
              Built a web application using Next.js React Framework to showcase
              personal goals and projects.
            </li>
            <li>Deployed and hosted using Vercel.</li>
          </ul>
        </div>
      </ResumeSectionContent>
      <ResumeSectionContent
        title={"Smart Park Disney"}
        skills={["Java", "Android Studio", "Firebase", "Heroku"]}
      >
        <div>
          <Anchor href="https://github.com/Crcamargo/SmartParkDisney/blob/master/app/src/main/java/com/themparksdetermined/smartparkdisney/View/SmartPlanFragment.java">
            Github
          </Anchor>
          <ul>
            <li>
              Individually developed an Android app, using Java, that
              streamlines wait times and park info for Disneyland.
            </li>
            <li>
              Used Firebase and Google Directions API to design a Smart Plan
              feature. The Smart Plan feature allows a user to select their
              favorite rides and then generates an optimized plan using fast
              pass, ride wait time, average wait time, and location data.
            </li>
          </ul>
        </div>
      </ResumeSectionContent>
      <ResumeSectionContent title={"VRcane"} skills={["Unity", "C#"]}>
        <div>
          <Anchor href="https://youtu.be/1d2FRqKNIU0">Project Demo</Anchor>
          <ul>
            <li>
              Developed a multiplayer virtual reality first person game for the
              Google Daydream Headset.
            </li>
            <li>
              Worked in a team as algorithm specialist to design functions and
              optimize algorithms to have VRcane running properly and
              efficiently.
            </li>
          </ul>
        </div>
      </ResumeSectionContent>
    </ResumeSection>
  </div>
);

export default Resume;

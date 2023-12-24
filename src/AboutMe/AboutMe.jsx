import NavBar from "../NavBar/NavBar";
import "./aboutMe.css";
import coverPhoto from "../assets/coverPhoto.jpg";
import resume from "../assets/Jordan Alper-Website Resume.pdf";
import Accordion from "../Accordion/Accordion";
import Footer from "../Footer/Footer";

function AboutMe() {
  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="text-image">
          <img
            className="image"
            width={300.8}
            height={400}
            src={coverPhoto}
            alt="profile-pic"
          />
          <div className="text">
            <h1>Jordan Alper</h1>
            <div className="link-wrapper">
              <a
                href="https://www.linkedin.com/in/jordan-alper"
                target="_blank"
              >
                LinkedIn
              </a>
              <a href="https://jalper1.itch.io/" target="_blank">
                itch.io
              </a>
              <a href="https://github.com/jalper1" target="_blank">
                GitHub
              </a>
              <a href={resume} download>
                Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="summary-text">
          <Accordion
            title={<h1>About Me</h1>}
            content={
              <p className="about-me">
                As a Computer Science major with a Game Design Minor at the
                University of Wisconsin-Madison, I am dedicated to exploring the
                latest technologies and applying them to real-world challenges.
                Through my coursework and job experience I have developed a
                strong foundation in programming languages, algorithms, data
                structures, and computer networks.
              </p>
            }
          />
        </div>
        <div className="skills">
          <Accordion
            title={<h1>Specialties</h1>}
            content={
              <>
                <p className="concepts">
                  Software Development, Game Development, Web Development,
                  Mobile Development, Object Oriented Programming, Data
                  Structures, Algorithms, Agile Methodologies, Version Control,
                  UI/UX Design
                </p>
                <p className="languages">
                  React.js, JavaScript, HTML, CSS, Java, C# in Unity, gdscript,
                  Swift, TypeScript, C, MySQL, Node.js, Express.js
                </p>
                <p className="softwares">
                  Visual Studio Code, Xcode, GitHub, Adobe Photoshop, Godot,
                  Windows, Linux, GBStudio, p5play, Firebase, IntelliJ IDEA
                </p>
              </>
            }
          />
        </div>
        <div className="work">
          <Accordion
            title={<h1>Work Experience</h1>}
            content={
              <>
                {" "}
                <div className="toast">
                  <h2>Toast</h2>
                  <p>
                    <em>Software Engineering Intern</em>
                  </p>
                  <p>
                    Programmed in Swift to collaborate on and create an app for
                    restaurant employees. Employed Agile methodologies to
                    effectively communicate and work with team members.
                  </p>
                </div>
                <div className="kotini">
                  <h2>Kotini</h2>
                  <p>
                    <em>Software Developer Intern</em>
                  </p>
                  <p>
                    Utilized Typescript, React.js, and CSS to build website
                    components for a tech-startup. Developed strong
                    communication and collaboration skills through group
                    projects and interactions with peers in my field of study.
                  </p>
                </div>
                <div className="camp">
                  <h2>Camp Interlaken</h2>
                  <p>
                    <em>Counselor and Counselor-in-Training</em>
                  </p>
                  <p>
                    Highly adept at planning, executing, and supervising camp
                    activities, including crafting all camp programming. Strong
                    interpersonal communication skills with success in
                    coordinating activities and sustaining camp missions and
                    programs.
                  </p>
                </div>
              </>
            }
          />
        </div>
        <div className="education">
          <Accordion
            title={<h1>Education</h1>}
            content={
              <>
                <div className="wisconsin">
                  <h2>University of Wisconsin-Madison</h2>
                  <p>
                    <em>September 2020 - May 2024</em>
                  </p>
                  <div className="degree">
                    <p>
                      <strong>Major:</strong> Computer Science
                    </p>
                    <p>
                      <strong>Minor:</strong> Game Design
                    </p>
                  </div>
                </div>
                <div className="london">
                  <h2>Foundation for International Education (FIE)</h2>
                  <p>
                    <em>January 2023 - April 2023</em>
                  </p>
                  <div className="degree">
                    <p>UW in London</p>
                    <p>International internship placement in CS</p>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutMe;

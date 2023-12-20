import NavBar from "../NavBar/NavBar";
import "./aboutMe.css";
import coverPhoto from "../assets/coverPhoto.jpg";
import resume from "../assets/Jordan Alper-Website Resume.pdf";

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
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="summary-text">
        <p>
          As a Computer Science major with a Game Design Minor at the University
          of Wisconsin-Madison, I am dedicated to exploring the latest
          technologies and applying them to real-world challenges. Through my
          coursework I have developed a strong foundation in programming
          languages, algorithms, data structures, and computer networks.
        </p>
        <p>
          During my software development internship at Kotini in London, I
          collaborated with a diverse team of professionals on challenging
          projects, which allowed me to enhance my technical skills and gain a
          deeper understanding of the global technology landscape. This
          experience also taught me the importance of understanding different
          cultures, work ethics, and lifestyles, which made me more adaptable
          and broadened my perspective.
        </p>
        <p>
          As someone who is deeply passionate about software development, video
          game design and creative writing, I have developed strong
          problem-solving and creative abilities through a combination of
          academic studies and personal interests, including playing a wide
          array of video games and teaching and engaging in Dungeons and
          Dragons. Through my experience I have come to understand that
          creativity is a crucial element in finding elegant solutions to
          complex problems, and I strive to apply this mindset to all of my
          work. I am excited to bring my creative and technical expertise to all
          projects and I am always looking for opportunities to challenge myself
          and explore new avenues for innovation.
        </p>
        <p>
          In my professional pursuits I am eager to combine my technical and
          creative skills to create innovative solutions that make a difference
          in people's lives. With my dedication, skills, and experience, I am
          confident that I can contribute positively to any team or organization
          I work with.
        </p>
      </div>
    </>
  );
}

export default AboutMe;

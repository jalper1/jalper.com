import NavBar from "../NavBar/NavBar";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./projectPage.css";
import photo from "../assets/react.svg";
import robotPhoto from "../assets/robot.jpg";
import mansionPhoto from "../assets/mmansion.png";
import eotwPhoto from "../assets/eotw.png";
import itchPhoto from "../assets/itchPhoto.png";
import Footer from "../Footer/Footer";

function ProjectPage({ ...props }) {
  return (
    <>
      <NavBar />
      <div className="project-header">
        <h1>Jordan Alper's Portfolio</h1>
      </div>
      <div className="project-text">
        <div className="cards">
          <ProjectCard
            title="Echoes of the Wilds"
            backgroundColor="black"
            link="https://skzhu.itch.io/echoesofthewilds"
            description="Lead Engineer and Designer"
            image={eotwPhoto}
            {...props}
          />
          <ProjectCard
            title="Manuever Mansion"
            backgroundColor="black"
            link="https://jalper1.itch.io/maneuver-mansion"
            description="UI and Game Mechanic Developer and Designer"
            image={mansionPhoto}
            {...props}
          />
          <ProjectCard
            title="Robo Aid Website"
            backgroundColor="black"
            link="https://github.com/jalper1/Java-Aid-Website"
            description="Frontend Developer"
            image={robotPhoto}
            {...props}
          />
          <ProjectCard
            title="jordanalper.com"
            backgroundColor="black"
            link="https://github.com/jalper1/jalper.com"
            description="Frontend Developer"
            image={photo}
            {...props}
          />

        </div>
        <div className="cards-2">
        <ProjectCard
            title="Echoes of the Wilds GitHub"
            backgroundColor="black"
            link="https://github.com/jalper1/Game-Design-Project"
            description="Lead Engineer and Designer"
            image={eotwPhoto}
            {...props}
          />
          <ProjectCard
            title="Manuever Mansion GitHub"
            backgroundColor="black"
            link="https://github.com/Flame48/FurnitureFrenzy"
            description="UI and Game Mechanic Developer and Designer"
            image={mansionPhoto}
            {...props}
          />
          <ProjectCard
            title="All Games"
            backgroundColor="black"
            link="https://jalper1.itch.io/"
            description="Game Designer and Developer"
            image={itchPhoto}
            {...props}
          />
        </div>
      </div>
      <Footer class="footer" />
    </>
  );
}

export default ProjectPage;

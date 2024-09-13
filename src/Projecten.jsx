import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub, // Import GitHub icon
} from "react-icons/fa";
import weather from "./assets/WeerApp.png";
import SpiderMovie from "./assets/SpiderMovie.png";
import Nutrition from "./assets/Nutrition.png";
import Studenten from "./assets/StudentenOverzicht.png";

const projects = [
  {
    id: 1,
    title: "Project 1",
    date: "07-05-2024",
    description: `Ontdek onze weerapp, gebouwd met HTML, CSS en JavaScript en aangedreven door de OpenWeatherMap API. Krijg live weersinformatie zoals temperatuur, weersomstandigheden, luchtvochtigheid en windrichting.

    Bekijk het weer voor je locatie of een andere stad met een paar tikken. 

    Als Progressive Web App (PWA) kun je de app downloaden en gebruiken zonder internet. Gegevens worden automatisch bijgewerkt zodra je online bent. 

    Ontvang meldingen voor belangrijke weerwaarschuwingen en heb altijd snel toegang tot de belangrijkste informatie, waar je ook bent. Blijf moeiteloos op de hoogte van het weer!`,
    image: weather,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/weatherapp/index.html",
    githubUrl: "https://github.com/yourusername/project1", // Add GitHub URL
  },
  {
    id: 2,
    title: "Project 2",
    date: "07-04-2024",
    description: `Voor mijn project heb ik gekozen voor de film Spider-Verse en een interactieve ervaring gecreëerd met een parallax-effect.
    Het doel was om het effect zo realistisch mogelijk te maken,
    waarbij het lijkt alsof je naar een 3D-karakter kijkt. Door gebruik te maken van een op maat gemaakte scrollbar en een dynamische galerij, 
    kunnen bezoekers door verschillende afbeeldingen van personages scrollen die allemaal zijn gemaakt met Blender.
    Een uitdaging bij het gebruik van het parallax-effect is dat het op kleinere schermen iets minder mooi kan zijn. 
    Desondanks heb ik geprobeerd om de ervaring zo vloeiend en boeiend mogelijk te maken,
    met een naadloze overgang tussen afbeeldingen en een aantrekkelijke presentatie voor de fans van de film.`,
    image: SpiderMovie,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/moviemaker/index.html",
    githubUrl: "https://github.com/yourusername/project2", // Add GitHub URL
  },
  {
    id: 3,
    title: "Project 3",
    date: "03-03-2024",
    description: `Voor mijn schoolproject moest ik een webshop ontwikkelen zonder gebruik te maken van een back-end.
    Ondanks de uitdaging besloot ik de webshop volledig af te ronden. In plaats van een server te gebruiken, slaat mijn webshop gegevens op met localStorage.
    Wanneer gebruikers een product selecteren, wordt dit weergegeven met een afbeelding, naam,
    en beschrijving. Via een knop kunnen ze het product aan hun winkelwagen toevoegen. Alle items worden opgeslagen in de browser, 
    zodat gebruikers hun winkelwagentje kunnen beheren zonder een server.
    Dit alles zorgt voor een soepele en functionele webshop, volledig draaiend aan de client-side.`,
    image: Nutrition,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl//XxlNutrition/index.html",
    githubUrl: "https://github.com/yourusername/project3", // Add GitHub URL
  },
  {
    id: 4,
    title: "Project 4",
    date: "04-04-2024",
    description: `Voor dit project heb ik een PHP-webapplicatie ontwikkeld waarmee je studenten kunt beheren. Je kunt studenten toevoegen,
    hun gegevens bewerken en ze verwijderen.
    Met een simpele interface kun je nieuwe studenten invoeren, bestaande studenten aanpassen en ongewenste studenten verwijderen. 
    Het systeem is gebouwd met PHP en MySQL en toont mijn vaardigheid in het creëren van praktische oplossingen voor gegevensbeheer.`,
    image: Studenten,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/PROGRAM1-PHP2-Scaffolding-main/PROGRAM1-PHP2-Scaffolding-main/uitlees.php?classId=157f4b4d-4c36-4f53-bc14-0962695f7dbf&assignmentId=c74238d5-30f0-4759-8059-73618cdedbc7&submissionId=e9d86793-8f93-55b7-3353-216a2994f665",
    githubUrl: "https://github.com/yourusername/project4", // Add GitHub URL
  },
  {
    id: 5,
    title: "Project 5",
    date: "05-05-2024",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
    url: "https://example.com/project5",
    githubUrl: "https://github.com/yourusername/project5", // Add GitHub URL
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (id) => {
    const project = projects.find((proj) => proj.id === id);
    setSelectedProject(project);
  };

  return (
    <div
      id="projects"
      className="m-4 sm:m-12 md:m-16 lg:m-24 bg-[#f2fa9b] w-11/12 max-w-8xl lg:max-w-[1200px] xl:max-w-[1500px] px-4 sm:px-8 lg:px-16 py-12 rounded-xl shadow-lg flex flex-col items-center relative"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[100px] font-cooper text-[#1f2e13] text-center mb-8 lg:mb-16">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Left: Project Image */}
        <div
          className="relative group cursor-pointer w-full h-[350px] sm:h-[450px] lg:h-[550px]"
          onClick={() => window.open(selectedProject.url, "_blank")}
        >
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-white text-2xl font-bold">
              Project Bekijken <FaExternalLinkAlt className="inline ml-2" />
            </div>
          </div>
        </div>

        {/* Right: Project Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {selectedProject.title}
            </h2>
            <p className="text-lg font-light mb-2">{selectedProject.date}</p>
            <p className="text-md mb-4">{selectedProject.description}</p>

            {/* Languages/Technologies Icons */}
            <div className="flex flex-wrap items-center space-x-4 text-3xl sm:text-4xl mb-4">
              {selectedProject.languages.map((icon, index) => (
                <span key={index} className="text-[#1f2e13]">
                  {icon}
                </span>
              ))}
            </div>

            {/* GitHub Button Below Icons */}
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 mt-4"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            )}
          </div>

          {/* Project Buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            {projects.map((project) => (
              <div key={project.id} className="flex gap-2 items-center">
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className={`px-4 py-2 rounded-lg text-base sm:text-lg ${selectedProject.id === project.id
                      ? "border-b-4 border-[#1f2e13] underline font-bold"
                      : "hover:underline"
                    }`}
                  style={{
                    backgroundColor:
                      selectedProject.id === project.id ? "#dce57d" : "#f2fa9b",
                    color: "#1f2e13",
                  }}
                >
                  {project.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

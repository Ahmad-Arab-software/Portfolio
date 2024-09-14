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
import threejs from "./assets/3d.png";

const projects = [
  {
    id: 1,
    title: "Project 1",
    date: "07-05-2024",
    description: `Ontdek mijn weerapp, die ik heb gebouwd met HTML, CSS en JavaScript, en die gebruikmaakt van de OpenWeatherMap API. De app biedt live weersinformatie, zoals temperatuur, weersomstandigheden, luchtvochtigheid en windrichting.

Met slechts een paar klikken kan ik het weer bekijken voor mijn huidige locatie of elke andere stad.

De app is een Progressive Web App (PWA), wat betekent dat ik deze kan downloaden en gebruiken zonder internetverbinding. De gegevens worden automatisch bijgewerkt zodra ik weer online ben.

Ik ontvang ook meldingen voor belangrijke weerwaarschuwingen, zodat ik altijd snel toegang heb tot de meest relevante informatie, waar ik ook ben. Zo blijf ik moeiteloos op de hoogte van het weer!`,
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
    date: "14-09-2024",
    description: `Voor dit project heb ik een interactieve 3D-modelviewer ontwikkeld met Three.js en Blender. De applicatie laat gebruikers toe om tussen verschillende 3D-personages te schakelen en hun animaties te bekijken door op knoppen te klikken. Elk model wordt weergegeven in GLB-formaat en verlicht met lichtbronnen voor een realistische uitstraling. Door Orbit Controls toe te voegen, kunnen gebruikers soepel rond de modellen draaien en ze vanuit alle hoeken bekijken. Dit project demonstreert mijn vermogen om 3D-visualisaties en animaties te integreren in een webomgeving.`,
    image: Studenten,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/PROGRAM1-PHP2-Scaffolding-main/PROGRAM1-PHP2-Scaffolding-main/uitlees.php?classId=157f4b4d-4c36-4f53-bc14-0962695f7dbf&assignmentId=c74238d5-30f0-4759-8059-73618cdedbc7&submissionId=e9d86793-8f93-55b7-3353-216a2994f665",
    githubUrl: "https://github.com/yourusername/project4", // Add GitHub URL
  },
  {
    id: 5,
    title: "Project 5",
    date: "02-06-2024",
    description: `
Voor dit project heb ik 3D-modellen gemaakt in Blender en ze geïntegreerd met Three.js om interactieve personages te tonen. Gebruikers kunnen via knoppen tussen verschillende personages schakelen en hun unieke animaties activeren. Ik heb Orbit Controls toegevoegd, zodat gebruikers soepel rond de modellen kunnen draaien en ze van alle hoeken kunnen bekijken. De modellen worden weergegeven in GLB-formaat en zijn voorzien van lichtbronnen om realistische belichting te creëren. Dit project heeft me laten experimenteren met animatieclips en het wisselen van personages voor een vloeiende gebruikerservaring.`,
    image: threejs,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/3d/page/index.html",
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
      className=" bg-[#f2fa9b] w-full h-full p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4"
    >
      <h1 className="text-2xl sm:text-6xl font-cooper text-[#1f2e13] text-center">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Left: Project Image */}
        <div
          className="grid group cursor-pointer w-full h-full"
          onClick={() => window.open(selectedProject.url, "_blank")}
        >
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-lg object-cover col-start-1 row-start-1 h-full"
          />
          <div className="col-start-1 row-start-1 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
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
                className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 mt-4 hover:opacity-90"
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
                  className={`px-4 py-2 rounded-lg text-base sm:text-lg ${
                    selectedProject.id === project.id
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

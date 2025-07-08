import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import threejsImg from "./assets/ThreeJS.png"; // Replace with your image path
import weather from "./assets/WeerApp.png";
import SpiderMovie from "./assets/SpiderMovie.png";
import Ontkoking from "./assets/Ontkoking.png";
import Yume from "./assets/Yume_ramen.png";
import Soon from "./assets/Coming_soon.png";

const originalProjectsData = [
  {
    id: 1,
    title: "Project 1",
    date: "07-05-2024",
    description: `Ontdek mijn weerapp, die ik heb gebouwd met HTML, CSS en JavaScript,
    en die gebruikmaakt van de OpenWeatherMap API. De app biedt live weersinformatie, zoals temperatuur,
    weersomstandigheden, luchtvochtigheid en windrichting.
    Met slechts een paar klikken kan ik het weer bekijken voor mijn huidige locatie of elke andere stad.
    De app is een Progressive Web App (PWA), wat betekent dat ik deze kan downloaden en gebruiken zonder internetverbinding.
    De gegevens worden automatisch bijgewerkt zodra ik weer online ben.
    Ik ontvang ook meldingen voor belangrijke weerwaarschuwingen, zodat ik altijd snel toegang heb tot de meest relevante informatie,
    waar ik ook ben. Zo blijf ik moeiteloos op de hoogte van het weer!`,
    image: weather,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/weatherapp/index.html",
    githubUrl: "https://github.com/school-Ahmad",
  },
  {
    id: 2,
    title: "Project 2",
    date: "07-04-2024",
    description: `Ontdek mijn interactieve Spider-Verse ervaring, gebouwd met een geavanceerd parallax-effect voor een meeslepende 3D-illusie.
     Deze webervaring combineert een op maat gemaakte scrollbar en een dynamische galerij, waarin bezoekers door Blender-gecreëerde personageafbeeldingen kunnen scrollen. 
     Mijn focus lag op een vloeiende en realistische visuele presentatie die de sfeer van de film weerspiegelt.
      Hoewel het parallax-effect op kleinere schermen iets minder optimaal presteert, 
      heb ik de overgang tussen beelden zo soepel en boeiend mogelijk gemaakt. 
      Dit project biedt een innovatieve en visueel aantrekkelijke beleving voor fans van de Spider-Verse.`,
    image: SpiderMovie,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/moviemaker/index.html",
    githubUrl: "https://github.com/school-Ahmad",
  },
  {
    id: 3,
    title: "Project 3",
    date: "19-09-2024",
    description: `Ontdek mijn digitale platform ‘Stop de ontkoking’, 
    ontwikkeld om Generatie Z te inspireren de keuken in te duiken! Met behulp van PHP, 
    Tailwind CSS en JavaScript, en een MariaDB database, heb ik een receptenwebsite gebouwd die de ‘ontkoking’ trend tegengaat.
     Gebruikers kunnen recepten bekijken (opgehaald via een API!), ‘liken’ om ze op te slaan, en zelfs eigen recepten toevoegen. 
     Om het beheer te vereenvoudigen, is er een admin-gedeelte gecreëerd in de backend. Hier kan de administrator gebruikers beheren: 
     accounts verwijderen, wachtwoorden en e-mailadressen aanpassen.`,
    image: Ontkoking,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaPhp />],
    url: "https://088484.stu.sd-lab.nl/Ontkoking/php/index.php",
    githubUrl: "https://github.com/school-Ahmad",
  },
  {
    id: 4,
    title: "Project 4",
    date: "19-11-2024",
    description: `
Ontdek mijn bezorgapp, Yume Ramen, gebouwd met PHP, Tailwind CSS, JavaScript
 en een MariaDB SQL database. Deze app,
 met een Japans thema, biedt een complete bezorgoplossing voor een ramen restaurant.
 Ik heb zowel het design als de code zelf ontwikkeld.
 De app omvat functionaliteiten voor klanten, bezorgers en chefs.
 Klanten kunnen eenvoudig ramen bestellen, combideals bekijken en zelf gerechten samenstellen.
 Bezorgers en chefs kunnen via hun eigen dashboards de status van bestellingen bijhouden en updates geven aan de klant.
 Alles is ontworpen voor een soepele en sfeervolle
 Japanse gebruikerservaring.
`,
    image: Yume,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaPhp />],
    url: "https://088484.stu.sd-lab.nl/Yume/php/views/register.php",
    githubUrl: "https://github.com/school-Ahmad",
  },
  {
    id: 5,
    title: "Project 5",
    date: "Heden",
    description: `Ontdek mijn innovatieve bestelsysteem voor het GLR Productiehuis!
    Dit is geen oefening, maar een officieel project, ontwikkeld in teamverband voor onze school.
     Gebouwd met PHP, Tailwind CSS en JavaScript, ondersteund door een MariaDB/SQL database,
     creëren we een centraal platform waar alle GLR studenten eenvoudig print- en signwerk kunnen bestellen.
     Van een sfeervolle homepage, product- en machinepagina's tot een persoonlijk dashboard en winkelwagen –
     elke functionaliteit is gericht op gebruiksgemak. Voor beheerders is er een krachtig admin gedeelte voor
     orderbeheer en productaanpassingen. Dankzij real-time statusupdates blijven studenten perfect geïnformeerd
     over hun bestellingen. Dit systeem, ontworpen in de herkenbare GLR en CP huisstijl,
     wordt dé besteloplossing voor het hele GLR.
      Ervaar het gemak en de efficiëntie van een bestelsysteem, speciaal gemaakt voor en door het GLR!`,
    image: Soon, // Use the placeholder image
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaPhp />],
    url: "https://ahmadarab.nl/",
    githubUrl: "https://github.com/school-Ahmad",
  },
];

// Reorder and rename projects based on user request
const reorderedProjectsData = [
  originalProjectsData[2], // Project 3 -> Project 1
  originalProjectsData[3], // Project 4 -> Project 2
  originalProjectsData[4], // Project 1 -> Project 3
  originalProjectsData[1], // Project 2 -> Project 4
  originalProjectsData[0], // Project 5 -> Project 5
].map((project, index) => ({
  ...project,
  id: index + 1, // Re-assign IDs sequentially
  title: `Project ${index + 1}`, // Update titles to Project 1, Project 2, etc.
}));

const projects = reorderedProjectsData;

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (id) => {
    const project = projects.find((proj) => proj.id === id);
    setSelectedProject(project);
  };

  return (
    <div
      id="projects"
      className="bg-[#f2fa9b] w-full h-full p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4"
    >
      <h1 className="text-2xl sm:text-6xl font-cooper text-[#1f2e13] text-center">
        PROJECTEN
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
            className="rounded-lg object-contain col-start-1 row-start-1 h-full" // object-contain added
            style={{ maxHeight: "400px" }} // Added max height to make images similar in size. Adjust as needed.
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

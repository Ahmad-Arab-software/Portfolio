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
const projects = [
  {
    id: 3,
    title: "Project 1",
    date: "07-05-2024",
    description: `Ontdek mijn weerapp, die ik heb gebouwd met HTML, CSS en JavaScript, en die gebruikmaakt van de OpenWeatherMap API. De app biedt live weersinformatie, zoals temperatuur, weersomstandigheden, luchtvochtigheid en windrichting.

Met slechts een paar klikken kan ik het weer bekijken voor mijn huidige locatie of elke andere stad.

De app is een Progressive Web App (PWA), wat betekent dat ik deze kan downloaden en gebruiken zonder internetverbinding. De gegevens worden automatisch bijgewerkt zodra ik weer online ben.

Ik ontvang ook meldingen voor belangrijke weerwaarschuwingen, zodat ik altijd snel toegang heb tot de meest relevante informatie, waar ik ook ben. Zo blijf ik moeiteloos op de hoogte van het weer!`,
    image: weather,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/weatherapp/index.html",
    githubUrl: "https://github.com/yourusername/project1",
  },
  {
    id: 4,
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
    githubUrl: "https://github.com/yourusername/project2",
  },
  {
    id: 1,
    title: "Project 3",
    date: "19-09-2024",
    description: `Ontdek mijn innovatieve bestelsysteem voor het GLR Productiehuis! 
    Dit is een officieel project, ontwikkeld in teamverband voor onze school. Gedesigned en gecodeerd door mijzelf,
     met behulp van PHP, Tailwind CSS en JavaScript, en een MariaDB/SQL database, 
     creëren we een centraal platform waar alle GLR studenten eenvoudig print- en signwerk kunnen bestellen. 
     Van een sfeervolle homepage, product- en machinepagina's tot een persoonlijk dashboard en winkelwagen – 
     elke functionaliteit is gericht op gebruiksgemak. Voor beheerders is er een krachtig admin gedeelte voor orderbeheer 
     en productaanpassingen. Dankzij real-time statusupdates blijven studenten perfect geïnformeerd over hun bestellingen. 
     Dit systeem, ontworpen in de herkenbare GLR en CP huisstijl, wordt dé besteloplossing voor het hele GLR. 
     Ervaar het gemak en de efficiëntie van een bestelsysteem, speciaal gemaakt voor en door het GLR!`,
    image: Ontkoking,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaPhp />],
    url: "https://088484.stu.sd-lab.nl/Ontkoking/php/index.php",
    githubUrl: "https://github.com/yourusername/project3",
  },
  {
    id: 2,
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
.`,
    image: Yume,
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaPhp />],
    url: "https://088484.stu.sd-lab.nl/Yume/php/views/register.php",
    githubUrl: "https://github.com/yourusername/project4",
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
    githubUrl: "https://github.com/yourusername/project5",
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

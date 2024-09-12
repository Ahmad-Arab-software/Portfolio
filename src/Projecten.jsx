import React, { useState } from "react";
import { FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

// Define project data
const projects = [
  {
    id: 1,
    title: "Project 1",
    date: "01-01-2021",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "./assets/WeerApp.png",  // Path to image in public folder
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://088484.stu.sd-lab.nl/weatherapp/index.html",
  },
  {
    id: 2,
    title: "Project 2",
    date: "02-02-2022",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfJ6TaQZ4SozXizNgd_l7hQ3Md_fbvym87g&s",
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
    url: "https://088484.stu.sd-lab.nl/moviemaker/index.html",
  },
  {
    id: 3,
    title: "Project 3",
    date: "03-03-2023",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
    url: "https://example.com/project3",
  },
  {
    id: 4,
    title: "Project 4",
    date: "04-04-2024",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfJ6TaQZ4SozXizNgd_l7hQ3Md_fbvym87g&s",
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaReact />],
    url: "https://example.com/project4",
  },
  {
    id: 5,
    title: "Project 5",
    date: "05-05-2025",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
    url: "https://example.com/project5",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (id) => {
    const project = projects.find((proj) => proj.id === id);
    setSelectedProject(project);
  };

  return (
    <div id="projects" className="m-24 bg-[#f2fa9b] w-11/12 max-w-8xl lg:max-w-[1200px] xl:max-w-[1500px] px-16 py-12 rounded-xl shadow-lg flex flex-col items-center relative">
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[100px] font-cooper text-[#1f2e13] opacity-100 text-center mb-8 lg:mb-16">
        PROJECTS
      </h1>

      <div className="bg-[#f2fa9b] text-[#1f2e13] rounded-lg w-full grid lg:grid-cols-2 gap-6">
        {/* Left: Project Image */}
        <div className="relative group cursor-pointer" onClick={() => window.open(selectedProject.url, "_blank")}>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-lg w-full h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-white text-2xl font-bold">
              Project Bekijken <FaExternalLinkAlt className="inline ml-2" />
            </div>
          </div>
        </div>

        {/* Right: Project Details */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
          <p className="text-lg font-light mb-2">{selectedProject.date}</p>
          <p className="text-md mb-4">{selectedProject.description}</p>

          {/* Languages/Technologies Icons */}
          <div className="flex space-x-4 text-4xl mb-4">
            {selectedProject.languages.map((icon, index) => (
              <span key={index} className="text-[#1f2e13]">{icon}</span>
            ))}
          </div>

          {/* Project Buttons */}
          <div className="flex  space-x-4 mt-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => handleProjectClick(project.id)}
                className={`px-4 py-2 rounded-lg text-lg ${selectedProject.id === project.id
                  ? "border-b-4 border-[#1f2e13] underline font-bold"
                  : "hover:underline"
                  }`}
                style={{ backgroundColor: selectedProject.id === project.id ? '#dce57d' : '#f2fa9b', color: '#1f2e13' }}
              >
                {project.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

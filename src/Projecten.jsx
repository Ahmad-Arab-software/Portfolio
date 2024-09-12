import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import an icon

const projects = [
  {
    id: 1,
    title: "Project 1",
    date: "01-01-2021",
    description: "Description of Project 1",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
  },
  {
    id: 2,
    title: "Project 2",
    date: "02-02-2022",
    description: "Description of Project 2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfJ6TaQZ4SozXizNgd_l7hQ3Md_fbvym87g&s",
  },
  {
    id: 3,
    title: "Project 3",
    date: "03-03-2023",
    description: "Description of Project 3",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
  },
  {
    id: 4,
    title: "Project 4",
    date: "04-04-2024",
    description: "Description of Project 4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfJ6TaQZ4SozXizNgd_l7hQ3Md_fbvym87g&s",
  },
  {
    id: 5,
    title: "Project 5",
    date: "05-05-2025",
    description: "Description of Project 5",
    image: "https://www.celoxis.com/cassets/img/pmc/project-management.png",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectClick = (id) => {
    const project = projects.find((proj) => proj.id === id);
    setSelectedProject(project);
  };

  return (
    <div id="projects" className="min-h-screen flex flex-col items-center justify-center bg-[#1f2e13] text-[#f2fa9b] py-12">
      {/* Project Card */}
      <div className="bg-[#f2fa9b] text-[#1f2e13] rounded-lg shadow-lg p-6 w-full max-w-md lg:max-w-4xl grid lg:grid-cols-2 gap-6">
        {/* Left: Project Image */}
        <div className="relative group">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-lg w-full lg:h-auto object-cover"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <div className="text-white text-2xl font-bold">
              Project Bekijken <FaExternalLinkAlt className="inline ml-2" />
            </div>
          </div>
        </div>

        {/* Right: Project Details */}
        <div>
          <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
          <p className="text-lg font-light mb-2">{selectedProject.date}</p>
          <p className="text-md mb-4">{selectedProject.description}</p>
        </div>
      </div>

      {/* Project Buttons */}
      <div className="flex space-x-4 mt-6">
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
  );
};

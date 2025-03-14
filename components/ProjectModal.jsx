import React from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";

const ProjectCard = ({ image, title, description, tools, github, demo, link }) => {
  return (
    <div className="max-w-sm border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      {/* Project Image */}
      <img src={image} alt="Project" className="w-full h-48 object-cover" />
      
      {/* Card Content */}
      <div className="p-4">
        {/* Project Title */}
        <h3 className="text-lg font-semibold">{title}</h3>
        
        {/* Project Description */}
        <p className="text-gray-600 text-sm mt-1">{description}</p>

        {/* Tools Used */}
        <p className="text-gray-500 text-xs mt-2">{tools.join(", ")}</p>

        {/* Icons */}
        <div className="flex items-center justify-end gap-3 mt-3 text-gray-700">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-900" />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="text-xl hover:text-blue-600" />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <FaPlay className="text-xl hover:text-green-600" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";

const Projects = ({ projects, onProjectClick }) => {
    return (
        <div className="projects-grid">
            {projects.map((project) => (
                <div key={project.id} className="project-card" onClick={() => onProjectClick(project)}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;